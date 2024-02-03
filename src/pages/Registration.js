import React from 'react'
import { Form } from '../components/Authentication/Register'
import Brand from '../components/Authentication/Register/Brand'
import ShadowBottom from '../assets/images/shadow-bottom.png'
const Registration = () => {
  return (
    <div className='registration'>
        {/* <img className='shadow-bottom' src={ShadowBottom} /> */}
        <Brand />
        <Form />
    </div>
  )
}

export default Registration