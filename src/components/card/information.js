import React from 'react'

const CardInformation = (props) => {
    return (
        <div className='number-card'>
            <span>{props.number}</span>
            <h3>{props.title}</h3>
        </div>
    )
}

CardInformation.defaultProps = {
    number: '100',
    title: 'Siswa'
}

export default CardInformation
