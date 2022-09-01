import { React } from 'react'
import { useState } from 'react';
import { clearClassName } from '../../Utils';
import Overlay from './Overlay';

const CollapsableCard = (props) => {

    const [isCollapsed, setIsCollapsed] = useState();


    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    let cardClass = clearClassName(['card', 'card-primary', (isCollapsed ? 'collapsed-card' : '')])

    return (
        <div className={cardClass}>
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
                <div className='card-tools'>
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" onClick={toggleCollapse}><i className={"fas " + (isCollapsed ? "fa-plus" : "fa-minus")}></i>
                    </button>
                </div>
            </div>
            <div className='card-body'>
                {props.children}
            </div>
            {props.footer &&
                <div className="card-footer">
                    {props.footer}
                </div>
            }
            {
                props.isLoading && <Overlay />
            }
        </div>
    );
}


export default CollapsableCard;