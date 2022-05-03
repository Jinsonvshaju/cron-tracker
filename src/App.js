import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Cron from "./components/crondetails/crondetails.jsx";
import Navigation from "./components/routes/navigation/Navigation";

function App(props) {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cron" element={<Cron />} />
      </Route>
    </Routes>
  );
}

export default App;
