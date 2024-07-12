import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpertList from "./pages/ExpertList";
import Login from "./pages/Login";
import Mypage from "./pages/Mypage";
import SignUpUsage from "./components/SignUp/SignUpUsage";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUpDone from "./components/SignUp/SignUpDone";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/expert-list" element={<ExpertList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/my-page" element={<Mypage />} />
                <Route path="/sign-up-usage" element={<SignUpUsage />} />
                <Route path="/sign-up-1" element={<SignUp1 />} />
                <Route path="/sign-up-2" element={<SignUp2 />} />
                <Route path="/sign-up-done" element={<SignUpDone />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
