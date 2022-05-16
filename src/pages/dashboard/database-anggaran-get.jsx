import React from 'react'
import { Link } from 'react-router-dom'
import * as Components from '../../components/index'

const DatabseAnggaranGet = () => {
    return (
        <div>
            <div>
                <Components.Title title='Data' subtitle='anggaran' desc='Berada di halaman profil subhalaman anggaran'/>
                <Link to='/dashboard/anggaran/add'>
                    <button className='button-normal'>Tambah Anggaran</button>
                </Link>
            </div>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>No</th>
                        <th>Keterangan</th>
                        <th>icon</th>
                        <th>Jumlah Rp</th>
                        <th>Data Rp</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='tbody'>
                    <tr>
                        <td>1</td>
                        <td>Jumlah Keuangan Sekolah</td>
                        <td>icon</td>
                        <td>Rp.100.000</td>
                        <td>100000</td>
                        <td>
                            <button className='button-dash edit'>
                                edit
                            </button>
                            <button className='button-dash delete'> 
                                delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DatabseAnggaranGet
