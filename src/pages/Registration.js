import React from 'react'
import { Form } from '../components/Authentication/Register'
import Brand from '../components/Authentication/Register/Brand'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const navigate = useNavigate()
  const {isAuthenticated} = useAuth0()
    if(isAuthenticated) {
      navigate('/')
    }
  return (
    <div className='registration'>
        {/* <img className='shadow-bottom' src={ShadowBottom} /> */}
        <Brand />
        <Form />
    </div>
  )
}

export default Registration