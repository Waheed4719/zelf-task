import React from 'react'
import PostDetails from './PostDetails'

const Modal = (
    {
        open, data, onClose
    }
) => {
  return (
    <div className="modal">
        <div className='backdrop'></div>
        <div className="modal-content">
            <PostDetails post={data} /> 
         </div>
    </div>
  )
}

export default Modal