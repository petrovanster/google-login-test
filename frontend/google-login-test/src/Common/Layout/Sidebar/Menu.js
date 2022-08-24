import React from "react";
import MenuItem from "./Menu/MenuItem";
import MenuGroup from "./Menu/MenuGroup"


const Menu = (props) => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {props.children}
            </ul >
        </nav >
    )
}

export default Menu;