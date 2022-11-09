import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Details";
import Offer from "./pages/Offer";
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/details" element={<Detail />} />

        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
};

export default App;
