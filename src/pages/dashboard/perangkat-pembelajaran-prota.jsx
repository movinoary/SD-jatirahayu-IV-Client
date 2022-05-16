import React, { useState } from 'react'
import * as Components from '../../components/index'

const PerangkatPembelajaranProta = () => {
    const [showModal, setShowModal] = useState(false);

    const modal = () => {
        setShowModal(prev => !prev);
    }; 


  return (
    <div>
        <Components.ModalProta showModal={showModal} setShowModal={setShowModal}/>
        <Components.Title title='Prota'/>
        <button className='button-normal' onClick={modal}>Tambah</button>
        <table className='table-kkm' border="1">
            <thead className='thead-kkm'>
                <tr>
                    <th>Tema</th>
                    <th>Subtema</th>
                    <th>Pembelajaran</th>
                    <th>Alokasi Waktu</th>
                    <th>Ket</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className='tbody-kkm'>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                        <button>Edit</button>
                        <button>Simpan</button>
                        <button>Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default PerangkatPembelajaranProta