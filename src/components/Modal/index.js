import React from 'react'
import './index.css'
import PostDetails from './PostDetails'
import CloseIcon from '../../assets/images/close-icon.svg'

const Modal = ({ open, data, onClose }) => {
    return (
        <div className="modal">
            <div className='modal-backdrop'></div>
            <div className="modal-content">
                <div className='close-modal'>
                    <img src={CloseIcon} onClick={onClose} />
                </div>
                <PostDetails post={data} onClose={onClose} />
            </div>
        </div>
    )
}

export default Modal