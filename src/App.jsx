import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import Profile from "./routes/Profile";
import Calculator from "./routes/Calculator";
import Navbar from "./components/Navbar";

import "./App.css";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/calculator"
          element={
            <PrivateRoute>
              <Calculator />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
