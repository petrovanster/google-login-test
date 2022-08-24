import React from "react";
import Header from "./Header";
import MainContent from "./MainContent"

const Content = (props) => {
    return (
        <div class="content-wrapper">
            <Header />
            <MainContent />
        </div>
    )
}

export default Content;