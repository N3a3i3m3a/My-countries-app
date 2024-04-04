import React from 'react'
import DesktopLogo from './icons/DesktopLogo'
import { Link, NavLink } from 'react-router-dom'
import MobileLogo from './icons/MobileLogo'
import { RiMenu2Line } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className='flex w-full justify-between py-10 '>
      <Link to='/'>
        <DesktopLogo />
        <MobileLogo />
      </Link>
      <NavLink to={'/'} className={' text-lg block md:hidden'}><RiMenu2Line /></NavLink>
      <NavLink to={'/'} className={'hidden md:block'}>Countries</NavLink>
    </div>
  )
}

export default NavBar