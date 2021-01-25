import React from 'react';

const Card = props => {

    const data = props.dataCard;

    return (
        <div className='card'>
            <img></img>
            <div>
                <span>in English</span>
                <h3>{data.wordNative}</h3>
            </div>
            <div>
                <span>in Russian</span>
                <h3>{data.wordLearn}</h3>
            </div>
        </div>
    )
}

export default Card;