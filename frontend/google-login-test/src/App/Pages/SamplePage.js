import React from "react";
import Card from "../../Common/Components/Cards/Card";
import CollapsableCard from "../../Common/Components/Cards/CollapsableCard";
import Button from "../../Common/Components/Form/Button";
import InputField from "../../Common/Components/Form/InputField";
import Page from "../../Common/Components/Page";
import Column from "../../Common/Layout/Content/Column";


const validate = (value) => {
    if (value.startsWith('abc') === true)
        return 'error'
    return ''
}

const SamplePage = (props) => {
    return (
        <Page title="Sample Page">
            <Column>
                <Card title="General Card"
                    footer={<>
                        <Button label="Submit" />  <Button label="Cancel" disabled={true} />
                    </>}>
                    <span>blablablabla blabla</span>
                    <InputField label="Email Address" placeholder="Enter here your email addess" validate={validate} />
                    <InputField label="Username" placeholder="Enter username" />
                </Card>
                <CollapsableCard title="Test Collapsable">
                    <span>Some sample text</span>
                </CollapsableCard>
            </Column>
            <Column>
                <CollapsableCard title="Second card">
                    <span>some content</span>
                </CollapsableCard>
            </Column>
        </Page>
    )
}

export default SamplePage;