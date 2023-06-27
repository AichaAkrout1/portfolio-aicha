import React from 'react'
import Ct from './Ct'
import Aicha from '../assests/images/aicha.png'
import HeaderSocial from './HeaderSocial'
import "../Scss/header.css";

function Headerr() {
  return (
    <header>
    <section className='container header_container'>
        <h5>Hello I'am</h5>
        <h1>Akrout Aicha</h1>
        <h5 className='text_light'>Full Stack Developer</h5>
        <Ct/>
        <HeaderSocial/>
        <div className='aicha'>
          <img src={Aicha} alt="aicha"/>

        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
    </section>
    </header>
  )
}

export default Headerr