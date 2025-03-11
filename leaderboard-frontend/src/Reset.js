import React, { useRef, useState } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const Reset = () => {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);

  const resetLeaderboard = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/reset/resetLeaderboard`, { method: "POST" });
      if (!response.ok) throw new Error("Failed to reset leaderboard");

      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "✅ Leaderboard successfully reset!",
        life: 3000,
      });
    } catch (error) {
      console.error("❌ Error resetting leaderboard:", error);
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "❌ Failed to reset leaderboard.",
        life: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="leaderboard-header">
        <h1>🔧 Reset Panel</h1>
      </div>
      <Toast ref={toast} />

      <Button
        label="Reset Leaderboard"
        icon="pi pi-refresh"
        className="p-button-danger p-button-lg"
        onClick={resetLeaderboard}
        disabled={loading}
        loading={loading}
      />
    </div>
  );
};

export default Reset;
