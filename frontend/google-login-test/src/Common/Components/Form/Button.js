import React from "react";


const Button = (props) => {

    const handleOnClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }
    return (
        <button className={"btn " + (props.stretch ? "btn-block" : "") + " btn-primary " + (props.disabled ? "disabled" : '')} onClick={handleOnClick}>{props.label}</button>
    )
}

export default Button;