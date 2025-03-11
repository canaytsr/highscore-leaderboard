import React, { useEffect, useState, useRef } from "react";
import { Button } from 'primereact/button'; 
import { Toast } from 'primereact/toast'; 
import { ProgressSpinner } from 'primereact/progressspinner'; 
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const DistributePrize = () => {
  const [winners, setWinners] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useRef(null); // PrimeReact Toast için

  useEffect(() => {
    fetchWinners();
  }, []);

  // 📌 Kazananları getir
  const fetchWinners = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/distributePrizes/winners`); // 🔥 Yeni URL
        const data = await response.json();
        setWinners(data);
    } catch (error) {
        console.error("❌ Error fetching winners:", error);
    }
};


  // 🏆 Ödülleri dağıt butonu
  const distributePrizes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/distributePrizes`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to distribute prizes");

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "🏆 Prizes distributed successfully!",
        life: 3000,
      });

      fetchWinners(); // Kazananları tekrar çek
    } catch (error) {
      console.error("❌ Error distributing prizes:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "❌ Error distributing prizes.",
        life: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="distributePrize-header">
        <h1>🏆 Prize Distribution</h1>
      </div>
      <Toast ref={toast} />

      {/* Ödül Dağıt Butonu */}
      <Button
        label="Distribute Prizes"
        icon="pi pi-gift"
        className="p-button-distributePrizes"
        onClick={distributePrizes}
        disabled={loading}
        loading={loading}
      />


      {/* Kazananları Gösteren DataTable */}
      <div className="distributePrize-header">
        <h2>Last Winners</h2>
      </div>
      <DataTable value={winners} paginator rows={5} className="p-datatable-striped">
        <Column field="rank" header="Rank" sortable></Column>
        <Column field="name" header="Player Name" sortable></Column>
        <Column field="money" header="Prize Money" body={(rowData) => `$${rowData.money}`} sortable></Column>
      </DataTable>
    </div>
  );
};

export default DistributePrize;