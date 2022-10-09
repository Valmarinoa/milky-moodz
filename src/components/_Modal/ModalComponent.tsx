import React from 'react'
import { Modal, BG, Close } from './styles'

interface _AuxProps {
    toggleModal: React.MouseEventHandler<HTMLElement>;
    children: React.ReactNode
}

// interface AuxProps {
//     children: React.ReactNode
//   }


const ModalComponent= ({children, toggleModal}:_AuxProps) =>(
        <>
            <Modal>
                <Close onClick={toggleModal}/>
                {children}
            </Modal>
            <BG onClick={toggleModal}/>
        </>
    )

export default ModalComponent