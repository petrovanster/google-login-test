import { React } from 'react'
import { useState } from 'react';

const CollapsableCard = (props) => {

    const [isCollapsed, setIsCollapsed] = useState();


    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div class={"card card-primary " + (isCollapsed ? 'collapsed-card' : '')}>
            <div class="card-header">
                <h3 class="card-title">{props.title}</h3>
                <div className='card-tools'>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" onClick={toggleCollapse}><i class={"fas " + (isCollapsed ? "fa-plus" : "fa-minus")}></i>
                    </button>
                </div>
            </div>
            <div className='card-body'>
                {props.children}
            </div>
            {props.footer &&
                <div class="card-footer">
                    {props.footer}
                </div>
            }
        </div>
    );
}


export default CollapsableCard;