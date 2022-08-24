import React from "react";
import { default as CommonMenu } from "../Common/Layout/Sidebar/Menu";
import MenuItem from "../Common/Layout/Sidebar/Menu/MenuItem";
import MenuGroup from "../Common/Layout/Sidebar/Menu/MenuGroup";

const Menu = () => {
    return (
        <CommonMenu>
            <MenuItem title="Home" icon="fas fa-home" to="/" />
            <MenuItem title="Sample Page" icon="fas fa-coffee" to="sample" />
            {/* <MenuGroup title="Samples" icon="fas fa-coffee">
                <MenuItem title="Sample item" icon='fas fa-angle-right' />
                <MenuItem title="Sample item w/ notif" icon='fas fa-tachometer-alt' notification="2" isActive={true} />
            </MenuGroup>
            <MenuGroup title="Other Samples" icon="fas fa-arrow-right-from-bracket">
                <MenuItem title="Sample item" icon='fa-solid fa-starship' />
            </MenuGroup> */}
        </CommonMenu>
    )
}

export default Menu;