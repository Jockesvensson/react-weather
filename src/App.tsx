import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Startpage from "./pages/Startpage";
import WeatherPage from "./pages/WeatherPage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/weather/:day" element={<WeatherPage />} />
      </Routes>
      {/* <Startpage /> */}
    </div>
  );
}

export default App;
