import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Dashboard from "./pages/Dashboard";
import "flowbite";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
