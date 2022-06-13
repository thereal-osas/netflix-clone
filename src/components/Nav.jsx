import React, { useEffect, useState } from 'react'
import avatar from '../../src/avatar.svg'
import '../components/Nav.css'

const Nav = () => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div className={`nav ${scrollNav && 'nav__black'} `}>
      <img
        className='nav__logo'
        src='https://pngimg.com/uploads/netflix/netflix_PNG25.png'
        alt='netflix logo'
      />

      <img className='nav__avatar' src={avatar} alt='netflix logo' />
    </div>
  )
}

export default Nav
