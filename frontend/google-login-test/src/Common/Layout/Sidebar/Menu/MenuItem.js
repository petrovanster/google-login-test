import React from "react";
import { Link } from "react-router-dom";

const MenuItem = (props) => {

    let warning = "";
    if (props.notification !== undefined)
        warning = <span className="right badge badge-danger">{props.notification}</span>

    return (
        <li className="nav-item">
            {/* <a className={"nav-link " + (props.isActive ? 'active' : '')} onClick={props.onClick}>
                <i className={"nav-icon " + props.icon}></i>
                <p>
                    {props.title}
                    {warning}
                </p>
            </a> */}
            <Link to={props.to} className={"nav-link " + (props.isActive ? 'active' : '')}>
                <i className={"nav-icon " + props.icon}></i>
                <p>
                    {props.title}
                    {warning}
                </p>
            </Link>
        </li>
    )
}

export default MenuItem;