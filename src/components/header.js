import React from 'react'

const Header = (props) => {

    return (
        <div className={props.cname}>
            <h1 className='header-judul'>{props.title}</h1>
            <span className='header-subjudul'>{props.subtitle}</span>
        </div>
    )
};


export default Header
