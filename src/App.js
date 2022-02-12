import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login"

export function App() {
  return (
     <BrowserRouter>
    <div className="container">
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}
