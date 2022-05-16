import React from 'react'

const CardFasilitas = (props) => {
    return (
        <div className="card-fasilitas">
            <img src={props.img} alt="fasilitas" className='fasilitas-img'/>
            <div className="layer">
                <h3 className="title1">{props.tsatu}</h3>
                <h3 className="title2">{props.tdua}</h3>
                <h3 className="title3">{props.ttiga}</h3>
            </div>
        </div>
    )
};

CardFasilitas.defaultProps ={
    img     : "https://images.pexels.com/photos/3747473/pexels-photo-3747473.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tsatu   : "Lab",
    tdua    : "Komputer",
    ttiga   : "Terakomdasi"
}


export default CardFasilitas