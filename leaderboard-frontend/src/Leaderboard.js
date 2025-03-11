import React, { useEffect, useState, useRef } from "react";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";
import "./App.css";
import "./index.css";
import "./flag.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const toast = useRef(null);

  const columnsRef = useRef([
    { field: "rank", header: "Ranking" },
    { field: "name", header: "Player Name" },
    { field: "country", header: "Country" },
    { field: "money", header: "Money" },
  ]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/leaderboard`);
        if (!response.ok) throw new Error("Failed to fetch leaderboard");

        let data = await response.json();

        data = data
          .sort((a, b) => b.money - a.money)
          .map((player, index) => ({
            ...player,
            rank: index + 1,
            name: player.name || "Unknown Player",
          }));

        setPlayers(data);
        setFilteredPlayers(data);
      } catch (error) {
        console.error("Fetch error:", error);
        if (toast.current) {
          toast.current.show({
            severity: "error",
            summary: "Error",
            detail: "An error occurred while fetching data.",
          });
        }
      }
    };

    fetchLeaderboard();
  }, []);

useEffect(() => {
  let filtered = [...players];

  if (search.trim() !== "") {
    filtered = filtered.filter(
      (player) =>
        `${player.name} ${player.surname}`
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }

   if (selectedCountry && selectedCountry !== "All") {
    filtered = filtered.filter(
      (player) => player.country_name === selectedCountry
    );
  }

  setFilteredPlayers(filtered);
}, [search, selectedCountry, players]);

  const onSearchInput = (event) => {
    const query = event.query.toLowerCase();

    const filtered = players
      .filter(
        (player) =>
          player.name.toLowerCase().includes(query) ||
          player.surname.toLowerCase().includes(query) ||
          `${player.name} ${player.surname}`.toLowerCase().includes(query)
      )
      .map((player) => `${player.name} ${player.surname}`); 

    setSuggestions([...new Set(filtered)]); 
  };

  const countryBodyTemplate = (rowData) => {
    let countryCode = rowData?.country_code
      ? rowData.country_code.toLowerCase()
      : "";
    return (
      <div className="flex align-items-center gap-2">
        {countryCode ? (
          <img
            alt={countryCode}
            src={`https://flagcdn.com/w40/${countryCode}.png`}
            className="flag"
            style={{ width: "24px", height: "16px" }}
          />
        ) : (
          <span style={{ fontStyle: "italic", color: "gray" }}>No Flag</span>
        )}
        <span>{" " + rowData?.country_name || "Unknown"}</span>
      </div>
    );
  };

  const playerNameTemplate = (rowData) => {
    return (
      <div>
        <div>{`${rowData?.name} ${rowData?.surname}`}</div>
        <div style={{ fontStyle: "italic", color: "#888" }}>
          {rowData?.username}
        </div>
      </div>
    );
  };

  // 📌 Ülke seçenekleri
  const countryOptions = [
    "All",
    ...new Set(players.map((player) => player.country_name)),
  ];

  return (
    <div className="container">
      <div className="leaderboard-header">
        <h1>Leaderboard</h1>
      </div>

      <div className="filters">
        <AutoComplete
          value={search}
          suggestions={suggestions}
          completeMethod={onSearchInput}
          onChange={(e) => setSearch(e.value)}
          placeholder="Search player..."
          className="p-autocomplete"
        />

        <Dropdown
          value={selectedCountry}
          options={countryOptions.map((country) => ({
            label: country,
            value: country,
          }))}
          onChange={(e) => setSelectedCountry(e.value)}
          placeholder="Filter by Country"
          className="p-dropdown"
        />
      </div>

      <div className="table-container">
        <DataTable
          value={filteredPlayers}
          paginator
          rows={10}
          reorderableColumns
          responsiveLayout="scroll"
        >
          {columnsRef.current.map((col, index) => (
            <Column
              key={index}
              field={col.field}
              header={col.header}
              sortable
              reorderable
              body={
                col.field === "country"
                  ? countryBodyTemplate
                  : col.field === "name"
                  ? playerNameTemplate
                  : null
              }
            />
          ))}
        </DataTable>
      </div>

      <Toast ref={toast} />
    </div>
  );
};

export default Leaderboard;
