import React, { useState, useEffect, useRef } from "react"; 
import { Button } from 'primereact/button';
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Toast } from "primereact/toast";
import './App.css'; // Eğer css dosyası varsa, burada düzenlemeleri yapabiliriz.

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const UpdateScore = () => {
  const [players, setPlayers] = useState([]); // Oyuncu listesi
  const [playerId, setPlayerId] = useState(null);
  const [amount, setAmount] = useState(0);
  const toast = useRef(null);

  // 📌 Oyuncu Listesini API'den Çek
  useEffect(() => {
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/leaderboard`);
      const data = await response.json();

      // 🔹 Kullanıcı adı ve ID ile Dropdown'a uygun format
      setPlayers(data.map(p => ({ label: `${p.username} (${p.name} ${p.surname})`, value: p.id })));
    } catch (error) {
      console.error("❌ Error fetching players:", error);
    }
  };

  // 🎯 Skor Güncelleme Fonksiyonu
  const updateScore = async () => {
    if (!playerId || amount <= 0) {
      toast.current.show({ severity: "warn", summary: "Warning", detail: "Please enter valid player and amount!", life: 3000 });
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/reset/updateScore`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId, amount }),
      });

      if (!response.ok) throw new Error("Failed to update score");

      toast.current.show({ severity: "success", summary: "Success", detail: "Score updated successfully!", life: 3000 });

      fetchPlayers(); // Güncellenmiş oyuncu listesini çek
    } catch (error) {
      console.error("❌ Error updating score:", error);
      toast.current.show({ severity: "error", summary: "Error", detail: "❌ Failed to update score.", life: 3000 });
    }
  };

  return (
    <div className="container">
      <div className="leaderboard-header">
        <h1>🎯 Update Score</h1>
      </div>

      <Toast ref={toast} />

      {/* Form Container */}
      <div className="form-containerUpdate">
        {/* 🔹 Oyuncu Seçimi */}
        <Dropdown
          value={playerId}
          options={players}
          onChange={(e) => setPlayerId(e.value)}
          placeholder=" Select a player "
          className="p-dropdown2"
          filter
          showClear
        />

        {/* 🔹 Skor Artırma */}
        <InputNumber
          value={amount}
          onValueChange={(e) => setAmount(e.value)}
          mode="decimal"
          placeholder="Enter amount"
          className="p-inputnumber2"
        />

        {/* 🔹 Skor Güncelleme Butonu */}
        <Button 
          label="Update Score" 
          icon="pi pi-save" 
          className="submit-button2" 
          onClick={updateScore} 
        />
      </div>
    </div>
  );
};

export default UpdateScore;
