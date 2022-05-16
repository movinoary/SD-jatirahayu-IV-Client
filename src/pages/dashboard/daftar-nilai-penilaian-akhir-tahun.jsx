import React from 'react'
import * as Components from '../../components/index'

const DaftarNilaiPenilaianAkhirTahun = () => {
  return (
    <div>
        <div>
            <Components.Title title='Penilaian' subtitle='Akhir' endtitle='tahun'/>
        </div>
        <div className='data-nilai-card'>
            <h1>Kelas</h1>
            <select id="subject">
                <option>Kelas 1</option>
                <option>Kelas 2</option>
                <option>Kelas 3</option>
                <option>Kelas 4</option>
                <option>Kelas 5</option>
                <option>Kelas 6</option>
            </select>
            <button className='silabus-button'>cari</button>
        </div>
        <table className='table-kkm' border="1">
            <thead className='thead-kkm'>
                <tr>
                    <th>No</th>
                    <th>Nama Siswa</th>
                    <th>P1</th>
                    <th>P2</th>
                    <th>P3</th>
                    <th>P4</th>
                    <th>P5</th>
                    <th>K1</th>
                    <th>K2</th>
                    <th>K3</th>
                    <th>K4</th>
                    <th>K5</th>
                </tr>
            </thead>
            <tbody className='tbody-kkm'>
                <tr>
                    <th>1</th>
                    <td>siapa</td>
                    <td><input type='number' pattern="[0-9]" min='1' max='3' /></td>
                    <td>P2</td>
                    <td>P3</td>
                    <td>P4</td>
                    <td>P5</td>
                    <td>K1</td>
                    <td>K2</td>
                    <td>K3</td>
                    <td>K4</td>
                    <td>K5</td>
                </tr>
            </tbody>
        </table>  
    </div>
    )
}

export default DaftarNilaiPenilaianAkhirTahun