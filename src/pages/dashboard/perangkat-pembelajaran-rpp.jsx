import React from 'react'
import * as Components from '../../components/index'

const PerangkatPembelajaranRPP = () => {
  return (
    <div>
    <div>
        <Components.Title title='RPP'/>
    </div>
    <div className='rpp-card'>
        <h1>Pilihan mata pelajaran</h1>
        <select id="subject">
            <option>Pendidikan Agama</option>
            <option>Pendididkan Kewarganegaraan</option>
            <option>Bahasa Indonesia</option>
            <option>Matematika</option>
            <option>Ilmu Pengetahuan Alam</option>
            <option>Ilmu Pengetahuan Sosial</option>
            <option>Pendidikan Jasmani, Olahraga dan Keterampilan</option>
            <option>Seni Budaya dan Prakarya</option>
            <option>Bahasa Sunda</option>
            <option>Bahasa Inggris</option>
        </select>
    </div>
    <div className='rpp-card'>
        <h1>Pilihan tema</h1>
        <select id="subject">
            <option>tema 1</option>
            <option>tema 2</option>
            <option>tema 3</option>
            <option>tema 4</option>
            <option>tema 5</option>
            <option>tema 6</option>
            <option>tema 7</option>
            <option>tema 8</option>
            <option>tema 9</option>
        </select>
    </div>
    <div className='rpp-card'>
        <h1>Pilihan subtema</h1>
        <select id="subject">
            <option>subtema 1</option>
            <option>subtema 2</option>
            <option>subtema 3</option>
            <option>subtema 4</option>
        </select>
    </div>
    <div className='rpp-card'>
        <h1>Pilihan Pembelajaran</h1>
        <select id="subject">
            <option>Pembelajaran 1</option>
            <option>Pembelajaran 2</option>
            <option>Pembelajaran 3</option>
            <option>Pembelajaran 4</option>
            <option>Pembelajaran 5</option>
            <option>Pembelajaran 6</option>
        </select>
        <button className='rpp-button'>cari</button>
    </div>
    <div>
        
    </div>
</div>
  )
}

export default PerangkatPembelajaranRPP