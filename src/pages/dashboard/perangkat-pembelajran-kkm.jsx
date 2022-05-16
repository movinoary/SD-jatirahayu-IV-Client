import React from 'react'
import * as Components from '../../components/index'

const PerangkatPembelajaranKKM = () => {
  return (
    <div>
    <div>
        <Components.Title title='KKM'/>
    </div>
    <button className='button-normal'>Edit</button>
    <button className='button-normal'>Simpan</button>
    <table className='table-kkm' border="1">
        <thead className='thead-kkm'>
            <tr>
                <th>No</th>
                <th>Mata Pelajaran</th>
                <th>KKM</th>
            </tr>
        </thead>
        <tbody className='tbody-kkm'>
            <tr>
                <td>
                    1
                </td>
                <td className='kkm-pem'>Pendidikan Agama</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    2
                </td>
                <td className='kkm-pem'>Pendididkan Kewarganegaraan</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    3
                </td>
                <td className='kkm-pem'>Bahasa Indonesia</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    4
                </td>
                <td className='kkm-pem'>Matematika</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    5
                </td>
                <td className='kkm-pem'>Ilmu Pengetahuan</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    6
                </td>
                <td className='kkm-pem'>Ilmu Pengetahuan</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    7
                </td>
                <td className='kkm-pem'>Pendidikan Jasmani</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    8
                </td>
                <td className='kkm-pem'>Seni Budaya</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    9
                </td>
                <td className='kkm-pem'>Bahasa Sunda</td>
                <td></td>
            </tr>
            <tr>
                <td>
                    10
                </td>
                <td className='kkm-pem'>Bahasa Inggris</td>
                <td></td>
            </tr>

        </tbody>
    </table>
</div>
  )
}

export default PerangkatPembelajaranKKM