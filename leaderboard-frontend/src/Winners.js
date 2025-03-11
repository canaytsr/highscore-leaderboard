import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Winners = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    fetchWinners();
  }, []);

  const fetchWinners = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/winners`);
      const data = await response.json();
      setWinners(data);
    } catch (error) {
      console.error("❌ Error fetching winners:", error);
    }
  };

  return (
    <div className="container">
      <h1>🏆 Weekly Winners</h1>
      <DataTable value={winners} paginator rows={10}>
        <Column field="id" header="Player ID" />
        <Column field="name" header="Player Name" />
        <Column field="money" header="Prize Money" body={(rowData) => `$${rowData.money}`} />
      </DataTable>
    </div>
  );
};

export default Winners;
