import React from 'react'

const Title = (props) => {
    return (
    <div className='FunTitle'>
        <h1  className='function-title'> {props.title}  <span>{props.subtitle}</span>  {props.endtitle} <i className={props.icon} /> 
        </h1>       
        <p className='function-desc'>{props.desc}</p>
    </div>
    )

}

export default Title