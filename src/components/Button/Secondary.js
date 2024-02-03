import React from 'react'

const SecondaryButton = ({children, ...props}) => {
  return (
    <button className='secondary-btn btn' {...props}>{children}</button>
  )
}

export default SecondaryButton