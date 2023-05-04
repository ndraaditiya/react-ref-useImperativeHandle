import { forwardRef, useImperativeHandle, useState } from 'react'
import { IModalHandle, IModalProps } from './interface'

const Modal = forwardRef<IModalHandle, IModalProps>((props, ref) => {
  const { children, title } = props

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen((prev) => !prev) //set to true

  const closeModal = () => setIsOpen((prev) => !prev) //set to false

  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal,
    }
  })

  return (
    <>
      {isOpen && <div className='modal-backdrop' onClick={closeModal}></div>}
      <dialog open={isOpen} onClose={closeModal} className='modal'>
        {/* Header */}
        <h4>{title}</h4>
        <hr />

        {/* Content */}
        <div className='modal-content'>{children}</div>
        <hr />

        {/* Footer */}
        <div className='modal-footer'>
          <button type='reset' onClick={closeModal}>
            Cancel
          </button>
          <button onClick={closeModal}>Submit</button>
        </div>
      </dialog>
    </>
  )
})

export { Modal }
