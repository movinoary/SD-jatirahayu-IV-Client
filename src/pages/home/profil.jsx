import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import * as Components from '../../components/index'
import * as Page from '../index'

const Profil = () => {
  return (
    <>
    <Components.Nav />
        <div className='profile-row'>
            <Link to='/profil' className='txt-dec'>
                <Components.CardIkon
                    judul='Profil Sekolah'
                    icon="fas fa-school"
                />
            </Link>
            <Link to='/profil/guru' className='txt-dec'>
                <Components.CardIkon 
                    judul='Profil Guru'
                    icon='fas fa-chalkboard-teacher'
                />
            </Link>
            <Link to='/profil/galeri' className='txt-dec'>
                <Components.CardIkon 
                    judul='Galeri Sekolah'
                    icon='fas fa-images'
                />
            </Link>
            <Link to='/profil/anggaran' className='txt-dec'>
                <Components.CardIkon 
                    judul='Anggaran'
                    icon='far fa-chart-bar'
                />
            </Link>
        </div>
        <Routes>
            <Route path='/' element={<Page.ProfilSekolah />} />
            <Route path='guru' element={<Page.ProfilGuru />} />
            <Route path='galeri' element={<Page.ProfilGaleri />} />
            <Route path='anggaran' element={<Page.ProfilAnggaran />} />
        </Routes>
    </>
  )
}

export default Profil