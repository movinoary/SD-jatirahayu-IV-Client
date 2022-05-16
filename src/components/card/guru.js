import React from 'react'

const CardGuru = (props) => {
    return (
    <figure className="card-kelas">
    <img src={props.img} alt="Kelas" />
        <div className="title">
            <div>
            <h2>{props.kat}</h2>
            <h4>{props.kls}</h4>
            </div>
        </div>
    <figcaption>
        <p>{props.desc}</p>
    </figcaption>
    </figure>
    )
};

CardGuru.defaultProps ={
    img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample38.jpg',
    kat: 'Wajib',
    kls: 'Pramuka',
    desc: 'Which is worse, that everyone has his price, or that the price is always so low'
};

export default CardGuru