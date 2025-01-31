import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Router>
      {" "}
      {/* Wrap the app in a Router */}
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
    </Router>
  );
};

export default App;
