import { React } from 'react'

const Card = (props) => {

    return (
        <div class="card card-primary">
            <div class="card-header">
                <h3 class="card-title">{props.title}</h3>
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


export default Card;