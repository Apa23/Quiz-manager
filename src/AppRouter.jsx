import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./auth/pages/LoginPage";
import { MainMenuRouter } from "./menu/routes/MainMenuRouter";

export const AppRouter = () => {
  const info = useSelector((state) => state.auth);
  return (
    <>
      <Routes>
        <Route path="/login" element={ <LoginPage />} />
        <Route path="/*" element={info.status==="logged in" ? <MainMenuRouter /> : <Navigate to={"/login"}/>} />
      </Routes>
    </>
  );
};
