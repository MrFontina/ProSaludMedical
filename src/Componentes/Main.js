import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/:Home" element={<Home />} />
        <Route
          path="*"
          element={<h1 className="h-screen">Oops, something went wrong</h1>}
        />
      </Routes>
    </main>
  );
};

export default Main;
