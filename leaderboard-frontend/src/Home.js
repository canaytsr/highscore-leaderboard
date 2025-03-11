import React from "react";
import { Button } from "primereact/button"; 
import "./App.css";

const Home = () => {

  const navigateToLeaderboard = () => {
    window.location.href = "/leaderboard"; 
  };

  const navigateToWinners = () => {
    window.location.href = "/winners";
  };

  const navigateToUpdateScore = () => {
    window.location.href = "/updateScore";
  };

  const navigateToDistributePrize = () => {
    window.location.href = "/distributePrize";
  };

  const navigateToDReset = () => {
    window.location.href = "/reset";
  };

  return (
    <div className="container">
      <div className="home-header">
        <h1>Menu</h1>
        <p>Click on the buttons below to review the week's winners, view the leaderboard, update the score and distribute prizes</p>
      </div>

      <div className="home-buttons">
        <Button
          label="Leaderboards"
          icon="pi pi-list"
          onClick={navigateToLeaderboard}
          className="p-button-leader p-button-rounded"
        />&nbsp;

         <Button
          label="Distribute Prizes"
          icon="pi pi-gift"
          onClick={navigateToDistributePrize}
          className="p-button-prize p-button-rounded"
        /> &nbsp;
        
        {/* <Button
          label="Haftanın Kazananları"
          icon="pi pi-trophy"
          onClick={navigateToWinners}
          className="p-button-winner p-button-rounded"
        /> */}
       

        <Button
          label="Update Score"
          icon="pi pi-pencil"
          onClick={navigateToUpdateScore}
          className="p-button-score p-button-rounded"
        />&nbsp;

       
         <Button
          label="Reset Board"
          icon="pi pi-times"
          onClick={navigateToDReset}
          className="p-button-reset p-button-rounded"
        />&nbsp;
      </div>
    </div>
  );
};

export default Home;
