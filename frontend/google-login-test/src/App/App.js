import React from "react";
import Main from "../Common/Layout/Main";
import SamplePage from "./Pages/SamplePage";
import Navbar from "../Common/Layout/Navbar";
import Sidebar from "../Common/Layout/Sidebar/Sidebar"
import Menu from "./Menu";
import HomePage from "./Pages/HomePage"

import { Route, Routes } from "react-router-dom"

import { BrowserRouter as Router } from "react-router-dom"


const AppSidebar = () => {
    return (
        <Sidebar>
            <Menu />
        </Sidebar>
    )
}

const App = (props) => {
    return (
        <Router>
            <Main navbar={<Navbar />} sidebar={<AppSidebar />}>
                {/* <SamplePage></SamplePage> */}
                {/* <HomePage /> */}
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="sample" element={<SamplePage />} />

                </Routes>
            </Main>
        </Router>
    )
}

export default App;