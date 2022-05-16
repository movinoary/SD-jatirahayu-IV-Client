import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [click, setClick] = useState (false);
    const [navbar, setNavbar] = useState (false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const changeBackground = () => {
        if(window.scrollY >= 320) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <>
        <nav className={navbar ? 'navbar active' : 'navbar'}>
            <div className='menu-icon' onClick={handleClick} >
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-tem'>
                    <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                        Beranda
                    </Link>
                </li>
                <li className='nav-tem'>
                    <Link to="/profil" className='nav-links' onClick={closeMobileMenu}>
                        Profil
                    </Link>
                </li>
                <li className='nav-tem'>
                    <Link to='/video' className='nav-links' onClick={closeMobileMenu}>
                        Video   
                    </Link>
                </li>
                <li className='nav-tem'>
                    <Link to='/berita' className='nav-links' onClick={closeMobileMenu}>
                        Berita
                    </Link>
                </li>
                <li className='nav-tem'>
                    <Link to='/dashboard' className='nav-links-mobile' target="_blank" onClick={closeMobileMenu}>
                        Masuk
                    </Link>
                </li>
            </ul>
            <Link to='/dashboard' target="_blank">
                <button className='btn'>Masuk</button>
            </Link>
        </nav>
        </>
    )
}
 
export default Nav