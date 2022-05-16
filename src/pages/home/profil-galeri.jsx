import React from 'react'
import * as Components from '../../components/index'


const ProfilGaleri = () => {
  return (
    <>
        <Components.Header cname='header sub' title='profil' subtitle='Galeri' />
        <div className='container row'>
          <Components.CardKegiatan />
          <Components.CardKegiatan />
          <Components.CardKegiatan />
          <Components.CardKegiatan />
        </div>
    </>
  )
}

export default ProfilGaleri