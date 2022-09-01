import React from "react";
import { useState } from "react";
import Button, { ButtonColors } from "../../../Common/Components/Form/Button";
import InputField from "../../../Common/Components/Form/InputField";
import Card from "../../../Common/Components/Cards/Card"


const validate = (value) => {
    if (value.startsWith('abc') === true)
        return 'error'
    return ''
}

const validateForm = (username, password) => {
    if (!username || !password)
        return false;
    if (password.length() < 5)
        return false;
    return true
}

const LoginForm = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const usernameChange = (s) => {
        setUsername(s);
        _validateForm()
    }

    const passwordChange = (s) => {
        setPassword(s)
        _validateForm()
    }

    const _validateForm = () => {
        setIsValid(validateForm(username, password))
    }

    const handleSubmit = () => {
        if (!isValid)
            return
        if (props.onSubmit) {
            props.onSubmit({ username: username, password: password })
        }
        setIsLoading(true)
    }


    return (
        <Card title="Login Form" isLoading={isLoading}>
            <InputField label="Email Address" placeholder="Enter here your email addess" validate={validate} />
            <InputField label="Username" placeholder="Enter username" onChange={usernameChange} />
            <InputField label="Password" placeholder="Enter Password" password={true} onChange={passwordChange} />
            <Button label="Login" onClick={handleSubmit} color={isValid ? ButtonColors.success : ButtonColors.default} disabled={!isValid} />
        </Card>
    )
}

export default LoginForm;