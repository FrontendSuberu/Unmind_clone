import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../shared/Layout";
import App from "../App"

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  );
}

export default Routing;
