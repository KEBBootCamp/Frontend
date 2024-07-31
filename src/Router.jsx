import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ExpertList from "./pages/ExpertList";
import ExpertDetail from "./pages/ExpertDetail";
import Login from "./pages/Login";
import ExpertMypage from "./pages/ExpertMypage";
import UserMypage from "./pages/UserMypage";
import SignUpUsage from "./components/SignUp/SignUpUsage";
import SignUpExpert from "./components/SignUp/SignUpExpert";
import SignUp1 from "./components/SignUp/SignUp1";
import SignUp2 from "./components/SignUp/SignUp2";
import SignUpDone from "./components/SignUp/SignUpDone";
import Loading from "./pages/Loading";
import ExpertMyInfoFix from "./pages/ExpertMyInfoFix";
import ExpertMyMatchingHistory from "./pages/ExpertMyMatchingHistory";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/expert-list" element={<ExpertList />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user-my-page" element={<UserMypage />} />
                <Route path="/expert-my-page" element={<ExpertMypage />} />
                <Route path="/sign-up-usage" element={<SignUpUsage />} />
                <Route path="/sign-up-expert" element={<SignUpExpert />} />
                <Route path="/sign-up-1" element={<SignUp1 />} />
                <Route path="/sign-up-2" element={<SignUp2 />} />
                <Route path="/sign-up-done" element={<SignUpDone />} />
                <Route path="/loading" element={<Loading />} />
                <Route path="/expert-detail" element={<ExpertDetail />} />
                <Route path="/expert-my-info-fix" element={<ExpertMyInfoFix />} />
                <Route path="/expert-my-matching-history" element={<ExpertMyMatchingHistory />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
