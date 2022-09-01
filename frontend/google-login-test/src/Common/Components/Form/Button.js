import React from "react";


const ButtonColors = {
    default: "default",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    info: "info",
    danger: "danger",
    warning: "warning",
    light: "light",
    dark: "dark"
}

const ButtonType = {
    normal: "",
    large: "lg",
    small: "sm",
    xsmall: "xs",
    flat: "flat"
}

const Button = (props) => {

    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    let color = props.color ? props.color : ButtonColors.default;
    let type = props.type ? "btn-" + props.type : "";

    let btnClassArray = [
        "btn",
        (props.stretch ? "btnBlock" : ""),
        type,
        "btn-" + color,
        (props.disabled ? "disabled" : "")
    ];
    let btnClass = btnClassArray.filter((p) => p).join(" ");
    return (
        <button className={btnClass} onClick={handleOnClick}>{props.label}</button>
    )
}

export default Button;
export { ButtonColors, ButtonType }