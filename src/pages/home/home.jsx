import React from 'react'
import * as Components from '../../components/index'

const Home = () => {

  return (
    <>
        <Components.Nav />
        <Components.Header cname='header' title='school' subtitle='flying to the moon' />
        <div className='container-information'>
            <Components.CardInformation />
            <Components.CardInformation />
            <Components.CardInformation />
            <Components.CardInformation />
        </div>
        <div className='container'>
            <Components.Title title='Sambutan' subtitle='kepala' endtitle='sekolah' />
            <Components.SambutanKepalaSekolah />
        </div>
        <div className='container row'>
            <Components.CardIkon
                judul='Profil Sekolah'
                icon="fas fa-school"
                // click={profil}
            />
            <Components.CardIkon 
                judul='Profil Guru'
                icon='fas fa-chalkboard-teacher'
                // click={profilguru}
            />
            <Components.CardIkon 
                judul='Galeri Sekolah'
                icon='fas fa-images'
               // click={galerikegiatan}
            />
            <Components.CardIkon 
                judul='Anggaran'
                icon='far fa-chart-bar'
                //click={anggaran}
            />
        </div>
        <div className='container'>
            <Components.Title title='Fasilitas' subtitle='sekolah' />
            <div className='row'>
                <Components.CardFasilitas />
                <Components.CardFasilitas />
                <Components.CardFasilitas />
                <Components.CardFasilitas />
            </div>
        </div>
        <div className='container'>
            <Components.Title title='Kegiatan' subtitle='sekolah' />
            <div className='row'>
                <Components.CardKegiatan />
                <Components.CardKegiatan />
                <Components.CardKegiatan />
                <Components.CardKegiatan />
            </div>
        </div>
        <div className='container'>
            <Components.Title title='Berita' subtitle='&' endtitle='Pengumuman' />
            <div className='row'>
                <Components.CardBerita />
                <Components.CardBerita />
                <Components.CardBerita />
            </div>
        </div>
        <Components.Footer />
    </>
  )
}

export default Home