import React from 'react'
import './index.css'
import InstagramIcon from '../../assets/images/instagram-icon.png'
import FacebookIcon from '../../assets/images/facebook-icon.png'
import TiktokIcon from '../../assets/images/tiktok-icon.png'

const footerItems = [
  {
    title: 'Terms of Service',
    link: '/terms'
  },
  {
    title: 'Privacy Policy',
    link: '/privacy'
  },
  {
    title: 'DMCA',
    link: '/dmca'
  }
]

const Footer = () => {
  return (
    <footer className='footer'>
      <nav>
        <ul className='footer-list'>
          {footerItems.map((item, index) => {
            return <li key={index}>
              <a href={item.link}>{item.title}</a></li>
          })}
        </ul>
        <div className='social'>
          <p>&copy; All rights reserved by Zelf. 2022</p>
          <ul className='social-links'>
            <li><a href='/'><img src={InstagramIcon} /></a></li>
            <li><a href='/'><img src={TiktokIcon} /></a></li>
            <li><a href='/'><img src={FacebookIcon} /></a></li>
          </ul>
        </div>
      </nav>
      <div>
      </div>
    </footer>
  )
}

export default Footer