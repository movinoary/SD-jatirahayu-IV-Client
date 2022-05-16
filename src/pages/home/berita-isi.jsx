import React from 'react'
import * as Component from '../../components/index'

const BeritaIsi = () => {
  return (
      <>
        <Component.Nav />
        <Component.Header cname='header sub' title='Berita' subtitle='isi' />
        <div className='berita-home'>
            <div className='berita-isi'>
                <div className='sec-desc'>
                    <h2>covid</h2>
                    <img src='https://infeksiemerging.kemkes.go.id/storage/posts/November2021/HwzCH41qx5fwMudRqsLH.png' alt='berita' />
                    <div className='desc-text'>
                        <p className='text-tgl-sum'>12-10-2000</p>
                        <p className='text-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p className='text-tgl-sum'>www.sekolah.com</p>
                    </div>
                </div>
            </div>
            <div className='berita-samping'>
            <Component.CardBerita image='https://awsimages.detik.net.id/community/media/visual/2021/11/29/omicron-varian-baru-corona-ini-hal-hal-terbaru-yang-diketahui_169.jpeg?w=1200'/>
            <Component.CardBerita image='https://awsimages.detik.net.id/community/media/visual/2021/11/29/omicron-varian-baru-corona-ini-hal-hal-terbaru-yang-diketahui_169.jpeg?w=1200'/>
            <Component.CardBerita image='https://awsimages.detik.net.id/community/media/visual/2021/11/29/omicron-varian-baru-corona-ini-hal-hal-terbaru-yang-diketahui_169.jpeg?w=1200'/>
            </div>
        </div>
      </>
  )
}

export default BeritaIsi