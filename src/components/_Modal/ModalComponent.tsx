import React from 'react'
import { Modal, BG } from './styles'

interface _Toggle {
    toggleModal: boolean;
    onClick?: React.MouseEventHandler;
}

const ModalComponent = ({toggleModal, onClick}:_Toggle) =>(
    <>
        <BG onClick={toggleModal} />
        <Modal />
    </>)

export default ModalComponent