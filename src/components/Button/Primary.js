import React from 'react'

const PrimaryButton = ({children, ...props}) => {
  return (
    <button className='primary-btn btn' {...props}>{children}</button>
  )
}

export default PrimaryButton