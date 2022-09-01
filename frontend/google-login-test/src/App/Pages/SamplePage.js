import React from "react";
import Card from "../../Common/Components/Cards/Card";
import CollapsableCard from "../../Common/Components/Cards/CollapsableCard";
import Button, { ButtonColors, ButtonType } from "../../Common/Components/Form/Button";
import InputField from "../../Common/Components/Form/InputField";
import Page from "../../Common/Components/Page";
import Column from "../../Common/Layout/Content/Column";
import LoginForm from "./FormComponents/LoginForm";


const validate = (value) => {
    if (value.startsWith('abc') === true)
        return 'error'
    return ''
}

const handleSubmit = (data) => {
    console.log(data)
}

const SamplePage = (props) => {
    return (
        <Page title="Sample Page">
            <Column>
                <LoginForm onSubmit={handleSubmit} />

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
                <CollapsableCard title="Buttons">
                    <div>
                        {/* Normal */}
                        <Button label="Default" />
                        <Button label="Primary" color={ButtonColors.primary} />
                        <Button label="Secondary" color={ButtonColors.secondary} />
                        <Button label="Success" color={ButtonColors.success} />
                        <Button label="Info" color={ButtonColors.info} />
                        <Button label="Danger" color={ButtonColors.danger} />
                        <Button label="Warning" color={ButtonColors.warning} />
                        <Button label="Light" color={ButtonColors.light} />
                        <Button label="Dark" color={ButtonColors.dark} />
                    </div>
                    <div>
                        {/* Large */}
                        <Button label="Default" type={ButtonType.large} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.large} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.large} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.large} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.large} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.large} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.large} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.large} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.large} />
                    </div>
                    <div>
                        {/* Small */}
                        <Button label="Default" type={ButtonType.small} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.small} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.small} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.small} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.small} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.small} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.small} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.small} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.small} />
                    </div>
                    <div>
                        {/* X-Small */}
                        <Button label="Default" type={ButtonType.xsmall} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.xsmall} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.xsmall} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.xsmall} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.xsmall} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.xsmall} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.xsmall} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.xsmall} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.xsmall} />
                    </div>
                    <div>
                        {/* flat */}
                        <Button label="Default" type={ButtonType.flat} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.flat} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.flat} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.flat} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.flat} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.flat} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.flat} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.flat} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.flat} />
                    </div>
                </CollapsableCard>
                <Card title="Disabled Buttons">
                    <div>
                        {/* Normal */}
                        <Button label="Default" />
                        <Button label="Primary" color={ButtonColors.primary}
                            disabled={true} />
                        <Button label="Secondary" color={ButtonColors.secondary}
                            disabled={true} />
                        <Button label="Success" color={ButtonColors.success}
                            disabled={true} />
                        <Button label="Info" color={ButtonColors.info}
                            disabled={true} />
                        <Button label="Danger" color={ButtonColors.danger}
                            disabled={true} />
                        <Button label="Warning" color={ButtonColors.warning}
                            disabled={true} />
                        <Button label="Light" color={ButtonColors.light}
                            disabled={true} />
                        <Button label="Dark" color={ButtonColors.dark}
                            disabled={true} />
                    </div>
                    <div>
                        {/* Large */}
                        <Button label="Default" type={ButtonType.large}
                            disabled={true} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.large}
                            disabled={true} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.large}
                            disabled={true} />
                    </div>
                    <div>
                        {/* Small */}
                        <Button label="Default" type={ButtonType.small}
                            disabled={true} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.small}
                            disabled={true} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.small}
                            disabled={true} />
                    </div>
                    <div>
                        {/* X-Small */}
                        <Button label="Default" type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.xsmall}
                            disabled={true} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.xsmall}
                            disabled={true} />
                    </div>
                    <div>
                        {/* flat */}
                        <Button label="Default" type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Primary" color={ButtonColors.primary} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Secondary" color={ButtonColors.secondary} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Success" color={ButtonColors.success} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Info" color={ButtonColors.info} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Danger" color={ButtonColors.danger} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Warning" color={ButtonColors.warning} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Light" color={ButtonColors.light} type={ButtonType.flat}
                            disabled={true} />
                        <Button label="Dark" color={ButtonColors.dark} type={ButtonType.flat}
                            disabled={true} />
                    </div>

                </Card>
                <CollapsableCard title="Collapsible Card" footer="footer">
                    <span>some content here</span>
                </CollapsableCard>
            </Column>
        </Page>
    )
}

export default SamplePage;