import React from 'react'
import SelectionIcon from '../../../assets/images/selection.png'
import './index.css'
import { PrimaryButton } from '../../Button'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Form = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className='form'>
            <h1 className='heading'>Register Your Account</h1>
            <form className='form-container'>
                <div className='selection'><img src={SelectionIcon} /> I Represent a Brand</div>

                <PrimaryButton onClick={(e)=>{
                    e.preventDefault()
                    loginWithRedirect()
                }}>Continue</PrimaryButton>
            </form>

            <div><span className='text-muted'>Already a member?</span><Link className='link' to="/">Sign In</Link></div>
        </div>
    )
}

export default Form