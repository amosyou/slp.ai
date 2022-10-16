import React from 'react';

const Button = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <button>{props.text}</button>
        </div>
        
    )
}

export default Button
