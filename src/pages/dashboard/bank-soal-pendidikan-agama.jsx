import React, { useState } from 'react'
import * as Components from '../../components/index'

const BankSoalPendidikanAgama = () => {
  const [showModal, setShowModal] = useState(false);

  const modal = () => {
      setShowModal(prev => !prev);
  }; 

  return (
    <div>
      <Components.ModalBankSoal showModal={showModal} setShowModal={setShowModal}/>
      <Components.Title title='Bank' subtitle='Soal' endtitle='Pendidikan Agama'/>
      <button className='button-normal' onClick={modal}>Tambah</button>
      <table className='table-kkm' border="1">
          <thead className='thead-kkm'>
              <tr>
                  <th>Tema</th>
                  <th>Subtema</th>
                  <th>Pembelajaran</th>
                  <th>Soal</th>
                  <th>jawaban</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody className='tbody-kkm'>
              <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                  <div>
                      <div>
                        <label>A</label>
                        <p>Jawabannya</p>
                      </div>
                      <div>
                        <label>B</label>
                        <p>Jawabannya</p>
                      </div>
                      <div>
                        <label>C</label>
                        <p>Jawabannya</p>
                      </div>
                      <div>
                        <label>D</label>
                        <p>Jawabannya</p>
                      </div>
                  </div>
                  </td>
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

export default BankSoalPendidikanAgama