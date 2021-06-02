import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import { Nav, Logo, Hamburger, Menu, MenuLink, MenuLinkCurrent } from './styles'

const Navbar = ({ pathName }) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Nav>
            <Logo href="">
                DEV<span>UI</span>
            </Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Hamburger>
            <Menu isOpen={isOpen}>
                {pathName === "/" ? <MenuLinkCurrent to="/">Our Work</MenuLinkCurrent> : <MenuLink to="/">Our Work</MenuLink>}
                {pathName === "/about" ? <MenuLinkCurrent to="/about">About</MenuLinkCurrent> : <MenuLink to="/about">About</MenuLink>}
                <MenuLink to="/">Careers</MenuLink>
                <MenuLink to="/">Contact</MenuLink>
            </Menu>
        </Nav>
    );
}

export default Navbar;
