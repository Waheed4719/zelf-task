import React from 'react'
import './index.css'
import Logo from '../../assets/images/logo-colored.png'
import { PrimaryButton, SecondaryButton } from '../Button'
import { useAuth0 } from '@auth0/auth0-react'
import UserIcon from '../../assets/images/user-icon.png'

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  console.log(user, isAuthenticated, isLoading)

  return (
    <header className='header'>
      <div><img src={Logo} /></div>
      <div className='auth'>
        {!isAuthenticated ?
          <><SecondaryButton>Sign in</SecondaryButton>
            <PrimaryButton>Join</PrimaryButton>
          </> : <> <img src={UserIcon} /> <PrimaryButton onClick={() => logout()}>Logout</PrimaryButton></>
        }

      </div>
    </header>
  )
}

export default Header