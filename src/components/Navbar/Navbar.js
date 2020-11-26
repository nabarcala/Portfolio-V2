import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './Navbar.elements';

const Navbar = () => {
    const [click, setCick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => setCick(!click);

    const showButton = () => 
    {
        // Set to false if in mobile mode
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    // Active and remove active menu
    const navLink = document.querySelectorAll('#NavLinks');

    const linkAction = () => {
        // Active link
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');

        // remove menu mobile
        // const navMenu = document.getElementById('nav-menu')
        // navMenu.classList.remove('show')
    };

    navLink.forEach(n => n.addEventListener('click', linkAction));

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#994141' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            N. Barcala
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        {/* NavMenu */}
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks 
                                    to='home'
                                    id="NavLinks"
                                    activeClass="active"
                                    smooth={true}
                                    duration={500} >
                                        Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks 
                                    to='about'
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-100} >
                                        About Me
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                    to='portfolio'
                                    activeClass="active"
                                    smooth={true}
                                    duration={500}
                                    offset={-30} >
                                        Portfolio
                                </NavLinks>
                            </NavItem>
                            {/* <NavItem>
                                <NavLinks to='/contact'>Contact Me</NavLinks> 
                            </NavItem> */}

                            <NavBtn>
                                {button ? (
                                    <NavBtnLink to="/resume">
                                        <Button primary>RESUME</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/resume">
                                        {/* <Button onClick={closeMobileMenu} fontBig primary>RESUME</Button> */}
                                        <Button fontBig primary>RESUME</Button>
                                    </NavBtnLink>
                                )}
                                
                            </NavBtn>
                            {/* End NavMenu */}

                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;

