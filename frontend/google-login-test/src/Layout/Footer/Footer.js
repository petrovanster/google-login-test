import React from "react";
import packageJson from '../../../package.json';

const Footer = (props) => {
    return (
        // <!-- Main Footer -->
        <footer className="main-footer">
            {/* <!-- To the right --> */}
            <div className="float-right d-none d-sm-inline">
                !!!Something new!!! {props.title} - {packageJson.name} - {packageJson.version}
            </div>
            {/* <!-- Default to the left --> */}
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
        </footer>
    )
}


export default Footer;