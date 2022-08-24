import React from "react";
import PageHeader from "./PageHeader";

const Page = (props) => {

    return (
        <div className="content-wrapper">
            <PageHeader title={props.title} />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        {props.children}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page;