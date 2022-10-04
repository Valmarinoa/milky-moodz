import React from 'react'
import { Modal, BG } from './styles'

interface _Toggle {
    toggleModal: React.MouseEventHandler<HTMLDivElement>;
}

const ModalComponent= ({toggleModal}: _Toggle) =>(


    <>
        <BG onClick={toggleModal}/>
        <Modal />
    </>)

export default ModalComponent