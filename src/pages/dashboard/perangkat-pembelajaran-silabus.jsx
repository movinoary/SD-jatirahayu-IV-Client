import React from 'react'
import * as Components from '../../components/index'

function PerangkatPembalejaranSilabus() {

    return (
        <div>
        <div>
            <Components.Title title='Silabus'/>
        </div>
        <div className='silabus-card'>
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
            <button className='silabus-button'>cari</button>
        </div>
        <table className='table-silabus'>
            <thead className='thead'>
                <tr>
                    <th>No</th>
                    <th>Semester</th>
                    <th>Kompotensi Dasar</th>
                    <th>Indikator</th>
                    <th>Materi Pembelajaran</th>
                    <th>Kegiatan Pembelajaran</th>
                    <th>Pendididkan Penguatan Karakter</th>
                    <th>Penilaian</th>
                    <th>Alokasi Waktu</th>
                    <th>Sumber Belajar</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='tbody'>
                <tr>
                <th>No</th>
                    <th>1</th>
                    <th>1</th>
                    <th>1</th>
                    <th>Iqro</th>
                    <th>baca iqro</th>
                    <th>baca</th>
                    <th>10</th>
                    <th>1jam</th>
                    <th>iqora</th>
                    <th><button>edit</button></th>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default PerangkatPembalejaranSilabus