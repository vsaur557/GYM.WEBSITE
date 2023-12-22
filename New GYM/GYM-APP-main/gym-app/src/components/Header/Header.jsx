import React from 'react'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'
import {Link} from 'react-scroll'
import './Headers.css'
import { useState } from 'react'
const Header = () => {

  const mobile=window.innerWidth<=768?true:false;
  const[menuopen,setmenuopen]=useState(false)
  return (
    <div className='header'>

      <img src={Logo} alt=""  className='logo'/>
      {menuopen===false && mobile===true?(
        <div style={{backgroundColor:'var(--appColor',padding:"0.5rem",borderRadius:"5px"}}
        onClick={()=>setmenuopen(true)}>
          <img src={Bars} alt=""style={{width:"1.2rem",height:"1rem"}} />
        </div>
      ):(
        <ul className='header-menu'>
        <li>
          <Link to='hero' span={true} smooth={true} actionClass='active' onClick={()=>setmenuopen(false)}>Home</Link></li>


          <li> <Link to='programs' span={true} smooth={true} onClick={()=>setmenuopen(false)}>Programs</Link></li>

        <li> <Link to='reasons' span={true} smooth={true} onClick={()=>setmenuopen(false)}>Why us</Link></li>


        <li> <Link to='Plans' span={true} smooth={true} onClick={()=>setmenuopen(false)}>Plans</Link></li>


        <li> <Link to='testimonials' span={true} smooth={true} onClick={()=>setmenuopen(false)}>Testimonials</Link></li>
        
      </ul>
      )}

      
      
    </div>
  )
}

export default Header
