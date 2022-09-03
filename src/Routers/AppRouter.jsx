import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import NavBar from "../components/NavBar";
import MenuPage from "../pages/MenuPage";

const AppRouter= () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/home" element={<HomePage />}  />
        <Route path="/about" element={<AboutPage />}  />
        <Route path="/notfound" element={<NotFoundPage />}  />
        <Route path="/menu" element={<MenuPage />}  />
        </Routes>
        </BrowserRouter>
    )
};

export default AppRouter;