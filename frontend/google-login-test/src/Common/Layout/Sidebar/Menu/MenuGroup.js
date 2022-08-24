import React from "react";
import { useState } from "react";


const MenuGroup = (props) => {
    const [open, setOpen] = useState(false)


    const handleClick = () => {
        setOpen(!open)
    }

    let liclassName = "nav-item " + (open ? "menu-open" : '')
    let icon = "right fas " + (open ? 'fa-angle-down' : 'fa-angle-right')
    let preIcon = "nav-icon " + props.icon;
    return (
        <li className={liclassName}>
            <a className="nav-link" onClick={handleClick}>
                <i className={preIcon}></i>

                <p>
                    {props.title}
                    <i className={icon}></i>
                </p>
            </a>


            <ul class="nav nav-treeview">
                {props.children}
            </ul>
        </li>
    )
}


export default MenuGroup;