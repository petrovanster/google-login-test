import React from "react";
import Page from "../../Common/Components/Page"
import Card from "../../Common/Components/Cards/Card"
import Column from "../../Common/Layout/Content/Column";

const HomePage = (props) => {
    return (
        <Page title="Home Page">
            <Column>
                <Card title={<> <i className="fas fa-home" /> <span>Description</span> </>}>

                    <span>Sample Home page</span>
                </Card>
            </Column>
        </Page>
    )
}

export default HomePage;