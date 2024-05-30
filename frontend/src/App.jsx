import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import SingIn from "./pages/SingIn";
import SingUp from "./pages/SingUp";
import Dashboard from "./pages/Dashboard";
import "flowbite";
import UnAuthorized from "./pages/UnAuthorized";
const App = () => {
  const [userData, setUserData] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const userToken = sessionStorage.getItem("token");

    setUserData({ user: JSON.parse(user), token: userToken });
  }, []);
  console.log(userData, "userData");
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route
            path="/dashboard"
            element={
              userData.user && userData.token ? <Dashboard /> : <UnAuthorized />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
