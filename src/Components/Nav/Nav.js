import React, {useState} from 'react';
import './Nav.css'
import Hamburger from './Hamburger/Hamburger';

const Nav = () => {
    const [active, setActive] = useState('')
    
    return(
        <div >
            <div className='desktopcontainer'>
            <div className='desktopnavname'>
                <p className='name'>Troy Domio</p>
                <p className='desc'>Web Developer & Designer</p>
            </div>
            <div className='desktopnav'>
                <a  href="/">About</a>
                <a href="https://drive.google.com/file/d/1JF9371StD-sTLO5nITatQB1agGYqiLH0/view?usp=sharing" target='_blank'>Resume</a>
                <a href="/projects" >Projects</a>
                {/* <a href="/contact" >Contact</a> */}
                {/* <a href="/blog" >Blog</a> */}
             </div>
             </div>
            <Hamburger/>
            <nav className="mobile-nav">
            <a href="/" >About</a>
            <a href="/resume" >Resume</a>
            <a href="/projects" >Projects</a>
            {/* <a href="/contact" >Contact</a> */}
            {/* <a href="" >Blog</a> */}
        </nav>
        </div>
    )
}

export default Nav;