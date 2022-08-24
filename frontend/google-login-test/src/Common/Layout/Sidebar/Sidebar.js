import SidebarSearchForm from "./SidebarSearchForm";
import UserPanel from "./UserPanel"

const Sidebar = (props) => {
    return (
        // <!-- Main Sidebar Container -->
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* <!-- Brand Logo --> */}
            <a href="index3.html" className="brand-link">
                <img src="~admin-lte/img/AdminLTELogo.png" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            {/* <!-- Sidebar --> */}
            <div className="sidebar">
                <UserPanel />

                <SidebarSearchForm />

                {props.children}
            </div>
        </aside>
    );
}


export default Sidebar;