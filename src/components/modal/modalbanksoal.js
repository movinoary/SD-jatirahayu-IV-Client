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
      <form className=''> 
        <div>
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
        <div>
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
        <div>
            <label> Pembelajaran</label>
            <input type='text' /> 
        </div>
        <div>
            <label> Soal</label>
            <textarea></textarea>
        </div>
        <div>
            <label> Pilihan Jawaban</label>
                <div>
                    <div>
                      <label>A</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>B</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>C</label>
                      <input type="text" />
                    </div>
                    <div>
                      <label>D</label>
                      <input type="text" />
                    </div>
                </div>
        </div>
        <button>Simpan</button>
      </form>
    </div>
    ) : null}
    </>
  )
}

export default ModalBankSoal