import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Leaderboard from "./Leaderboard";
import DistributePrize from "./DistributePrize";
import UpdateScore from "./UpdateScore";
import Home from "./Home";
import Reset from "./Reset";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/distributePrize" element={<DistributePrize />} />
          <Route path="/updateScore" element={<UpdateScore />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/home" element={<Home />} />
          <Route path="/*" element={<Home />} />

        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
