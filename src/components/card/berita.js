import React from 'react'

const CardBerita = (props) => {
    return (
            <figure className="card-berita">
            <div className="image">
                <img src={props.image} alt="sample52"/>
            </div>
            <figcaption>
                <div className="date"><span className="day">{props.tanggal}</span><span className="month">{props.bulan}</span></div>
                <h3>{props.judul}</h3>
            </figcaption>
            <footer>
                <div className="tema">{props.tema}</div>
            </footer>
            </figure>
    )
}
CardBerita.defaultProps = {
    path  :'/berita',
    image : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample52.jpg',
    tanggal: '23',
    bulan : 'oct',
    judul : 'Jumlah Penyebaran Corona Hilang selama-lamanya',
    tema : 'umum'
}

export default CardBerita


