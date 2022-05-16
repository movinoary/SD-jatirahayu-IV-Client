import React from 'react'
import * as Components from '../../components/index'

const ProfilGuru = () => {
  return (
    <>
    <Components.Header cname='header sub' title='Profil' subtitle='Guru' />
    <div className='container row'>
        <Components.CardGuru />
        <Components.CardGuru />
        <Components.CardGuru />
        <Components.CardGuru />
    </div>
    </>

  )
}

export default ProfilGuru