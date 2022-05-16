import React, { useRef } from 'react'

const ModalPromes = ({ showModal, setShowModal }) => {
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
                <label> Alokasi Waktu</label>
                <input type='text' /> 
            </div>
            <div>
                <label> Ket</label>
                <input type='text' /> 
            </div>
    </form>
    </div>
    ) : null}
    </>
  )
}

export default ModalPromes