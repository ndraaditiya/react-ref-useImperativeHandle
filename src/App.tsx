import { useRef } from 'react'
import { IModalHandle } from './components/Modal/interface'
import { Modal } from './components'
import './App.css'

function App() {
  const refModal = useRef<IModalHandle>(null)

  return (
    <div className='App'>
      <h3>How to Use React ref, forwardRef & useImperativeHandle</h3>
      <button onClick={() => refModal.current?.openModal()}>Open Modal</button>
      <Modal ref={refModal} title='This is Modal'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          porro esse saepe dolor, illo autem, vitae ducimus dicta assumenda
          corporis facere minus sit tenetur dolores ratione nulla ea nihil
          placeat?
        </p>
      </Modal>
    </div>
  )
}

export default App
