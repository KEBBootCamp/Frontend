import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpertList from "./pages/ExpertList";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/expert-list" element={<ExpertList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/my-page" element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
