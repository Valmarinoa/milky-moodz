import React from 'react'
import { Modal, BG, Close } from './styles'

interface _Toggle {
    toggleModal: React.MouseEventHandler<HTMLDivElement>;
}

const ModalComponent= ({toggleModal}:_Toggle) =>(
        <>
            <Modal>
                <Close />
            </Modal>
            <BG onClick={toggleModal}/>
        </>
    )

export default ModalComponent