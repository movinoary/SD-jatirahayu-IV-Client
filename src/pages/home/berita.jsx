import React from 'react'
import { Link } from 'react-router-dom'
import * as Components from '../../components/index'

const Berita = () => {
  return (
    <>
    <Components.Nav />
    <Components.Header cname='header sub' title='Berita' subtitle='sekolah' />
    <div className='container row'>
      <Link to='/berita/isi'>
        <Components.CardBerita/>
      </Link>
      <Link to='/berita/isi'>
        <Components.CardBerita/>
      </Link>
      <Link to='/berita/isi'>
        <Components.CardBerita/>
      </Link>

    </div>

    </>
  )
}

export default Berita