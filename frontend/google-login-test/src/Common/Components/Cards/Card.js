import { React } from 'react'
import Overlay from './Overlay';

const Card = (props) => {

    return (
        <div className="card card-primary">
            <div className="card-header">
                <h3 className="card-title">{props.title}</h3>
            </div>
            <div className='card-body'>
                {props.children}
            </div>
            {props.footer &&
                <div className="card-footer">
                    {props.footer}
                </div>
            }
            {props.isLoading && <Overlay />}

        </div>
    );
}


export default Card;