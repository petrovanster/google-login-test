import React from "react";
import MenuItem from "./Menu/MenuItem";
import MenuGroup from "./Menu/MenuGroup"


const Menu = (props) => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <MenuItem title="Home" icon="fas fa-home" />
                <MenuGroup title="Samples" icon="fas fa-coffee">
                    <MenuItem title="Sample item" icon='fas fa-angle-right' />
                    <MenuItem title="Sample item w/ notif" icon='fas fa-tachometer-alt' notification="2" isActive={true} />
                </MenuGroup>
                <MenuGroup title="Other Samples" icon="fas fa-arrow-right-from-bracket">
                    <MenuItem title="Sample item" icon='fa-solid fa-starship' />
                </MenuGroup>
            </ul >
        </nav >
    )
}

export default Menu;