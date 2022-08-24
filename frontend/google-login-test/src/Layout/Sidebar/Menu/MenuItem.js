import React from "react";


const MenuItem = (props) => {

    let warning = "";
    if (props.notification !== undefined)
        warning = <span className="right badge badge-danger">{props.notification}</span>

    return (
        <li class="nav-item">
            <a className={"nav-link " + (props.isActive ? 'active' : '')} onClick={props.onClick}>
                <i className={"nav-icon " + props.icon}></i>
                <p>
                    {props.title}
                    {warning}
                </p>
            </a>
        </li>
    )
}

export default MenuItem;