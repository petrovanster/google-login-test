import React from "react";

const Column = (props) => {
    return (
        <div class="col-md-6">
            {props.children}
        </div>
    )
}


export default Column;