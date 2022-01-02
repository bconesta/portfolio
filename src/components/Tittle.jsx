import React from 'react'

export default function Tittle(props) {
    return (
        <div className={props.class}>
            <h1>{props.tittle}</h1>
            <p>{props.text}</p>
        </div>
    )
}
