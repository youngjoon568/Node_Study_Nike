import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./view/templates/Header";
import HomePage from "./view/pages/HomePage";
import ProductListPage from "./view/pages/ProductListPage";
import ProductPage from "./view/pages/ProductPage";
import axios from 'axios';
import "./css/reset.css";

export default function App() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:8000/card`,
    }).then(res => {
      setCard(res.data);
    })
  }, []);
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage cardArr={card} />} />
        <Route path="/products/:productID" element={<ProductPage />} />
        <Route path="/products" element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
