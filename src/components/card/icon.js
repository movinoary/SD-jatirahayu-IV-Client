import React from 'react'

const CardIkon = (props) => {
    return (
        <button className="card-icon">
                <i className={props.icon}></i>
                <h3>{props.judul}</h3>
        </button>
    )
}

export default CardIkon
 