import { Avatar } from '@mui/material'
import { pink } from '@mui/material/colors'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FiMenu,FiX} from 'react-icons/fi'
import './Websitesty.css'
import ben from '../image/g1.jpg'

function Navbar() {
  const [open,setOpen] = useState(false)
  const handleclick = ()=>setOpen(!open);
  const closemenu = () =>setOpen(false)
  return (

    <>
        <nav className='navbar'>
        <Link to='/login' onClick={closemenu}>
             <Avatar alt='Groot' src={ben} sx={{ bgcolor: pink[500] ,padding:'20px' ,backgroundSize:'cover'}}/>
             I'm Groot
             </Link>
             
             <div className='logo'>
             welcome to my world!
             </div>
              <div className='nav-icon' onClick={handleclick}>
                {open ? <FiX /> :  <FiMenu /> }
              </div>
             <ul className={open ? 'links active' : 'links'}>
              {/* <li><Link to='/' style={{border:"1px solid white"}} onClick={closemenu}>Main</Link></li> */}
              <li><Link to='/Home/:userName' style={{border:"1px solid white"}} onClick={closemenu} >Home</Link> </li>
              <li><Link to="/aboutweb" style={{border:"1px solid white"}} onClick={closemenu}>About</Link></li>
              <li><Link to="/corttoon" style={{border:"1px solid white"}} onClick={closemenu}>Corttoon</Link></li>
              <li><Link to="/contactweb" style={{border:"1px solid white"}} onClick={closemenu}>Contact</Link></li>
             </ul>
        </nav>
        <nav className='nav-add'>
          <Link to='/Singup/'>SIGNUP</Link>
          <Link to='/register/'>REGISTER</Link>
        </nav>

        <div className='nav-content'><i>if you are happy at  time pls click <b>i'm groot</b> at top right to login our page </i>
        <Link to="/corttoon" style={{border:"1px solid white"}} onClick={closemenu}>Corttoon</Link>
        </div>

    </>
  )
}

export default Navbar
