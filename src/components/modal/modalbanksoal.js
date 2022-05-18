import React, { useRef } from 'react'

const ModalBankSoal = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      };
 
  return (
    <>
    {showModal ? (   
    <div className='modal' onClick={closeModal} ref={modalRef} > 
      <form className='modal-row'> 
      <h1>Tambah Soal</h1>
        <div className='modal-select'>
            <label> Tema</label>
            <select id="subject">
            <option>Pembelajaran 1</option>
            <option>Pembelajaran 2</option>
            <option>Pembelajaran 3</option>
            <option>Pembelajaran 4</option>
            <option>Pembelajaran 5</option>
            <option>Pembelajaran 6</option>
        </select>
        </div>
        <div className='modal-select'>
            <label> Subtema</label>
            <select id="subject">
            <option>Pembelajaran 1</option>
            <option>Pembelajaran 2</option>
            <option>Pembelajaran 3</option>
            <option>Pembelajaran 4</option>
            <option>Pembelajaran 5</option>
            <option>Pembelajaran 6</option>
        </select>
        </div>
        <div className='modal-select'>
            <label> Pembelajaran</label>
            <input type='text' /> 
        </div>
        <div className='modal-select'>
            <label> Soal</label>
            <textarea></textarea>
        </div>
        <div className='modal-select'>
            <label> Pilihan Jawaban</label>
                <div>
                    <div className='modal-ans'>
                      <label>A</label>
                      <input type="text" />
                    </div>
                    <div className='modal-ans'>
                      <label>B</label>
                      <input type="text" />
                    </div>
                    <div className='modal-ans'>
                      <label>C</label>
                      <input type="text" />
                    </div>
                    <div className='modal-ans'>
                      <label>D</label>
                      <input type="text" />
                    </div>
                </div>
        </div>
        <div className='modal-button'>
          <button>Simpan</button>
          <button onClick={closeModal}>close</button>
        </div>
      </form>
    </div>
    ) : null}
    </>
  )
}

export default ModalBankSoal