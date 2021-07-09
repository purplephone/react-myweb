import React from 'react';

function Form(props){
    return(
        <button onClick={props.onClick}>{props.name}</button>
    )
}

export default Form