import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';

import Preloader from "./components/Pre";
import HomePage from "./pages/HomePage/HomePage";
import Dashboard from "./pages/UserHomePage/Dashboard/Dashboard";
import AdminDashboard from "./pages/AdminHomepage/Dashboard/index";
import Zk from "./components/zkevm/zk";
import "./App.css";
import { Toaster } from "react-hot-toast";


import AllVoters from "./pages/AdminHomepage/AllVoters/index"
import AllCandidates from "./pages/AdminHomepage/AllCandidates/index"
import Elections from "./pages/AdminHomepage/Election/index"
import Results from "./pages/AdminHomepage/ResultPage/index"

// Default URL to send axios request to backend api 
axios.defaults.baseURL = process.env.SERVER_URL;

/**
 * Main App component that sets up the router and handles the preloader.
 * @returns {JSX.Element} JSX element representing the main App component.
 */
function App() {
  // State to control the preloader visibility
  const [load, updateLoad] = useState(true);

  /**
   * UseEffect hook to handle the preloader timeout.
   */
  useEffect(() => {
    // Set a timeout to hide the preloader after 1200 milliseconds (1.2 seconds)
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>

      {/* Preloader component */}
      <Preloader load={load} />

      {/* Main app container */}
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        {/* Toast notifications container */}
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
        {/* Router configuration */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/userdashboard" element={<Dashboard/>} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route path="/admindashboard/allvoters" element={<AllVoters />} />
          <Route path="/admindashboard/allcandidates" element={<AllCandidates />} />
          <Route path="/admindashboard/elections" element={<Elections />} />
          <Route path="/admindashboard/result" element={<Results />} />
          <Route path="/zkevm" element={<Zk />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
