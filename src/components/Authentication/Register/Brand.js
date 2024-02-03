import React from 'react'
import RegistrationBrand from '../../../assets/images/mobile-group.png'
import BlueBackground from '../../../assets/images/blue-background.png'


const Brand = () => {
  return (
    <div className='registration-brand' style={{backgroundImage:  `url(${BlueBackground})`}}>
        
        <img className='blue-background' src={RegistrationBrand} />
        <div className='registration-brand-text'>
            <div>all your</div>
            <div>content</div>
            <div className='outfit-bold instagram-font'>one</div>
            <div className='outfit-bold instagram-font'>Zelf.</div>
        </div>

    </div>
  )
}

export default Brand