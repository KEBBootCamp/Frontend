import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpertList from "./pages/ExpertList";
import Login from "./pages/Login";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/expert-list" element={<ExpertList />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
