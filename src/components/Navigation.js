import React from "react"
import styled from '@emotion/styled';
import { Link } from 'react-scroll'
import { theme, media } from '../styles'
import logoLight from '../images/ck-logo-light.svg'
import logoDark from '../images/ck-logo-dark.svg';

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;  // Increased height
  background-color: #181a1b;  // Updated color
  padding: 0 40px;
  top: 0;
  // Removed box-shadow

  ${media.medium} {
    padding: 0 1rem;
  }
`

const NavLogo = styled.img`
  height: 30px;
  width: 30px;
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-left: auto;  // Moves the links to the right side

  a {
    color: ${theme.colors.light};
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.yellow};
    }
  }

  ${media.small} {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Navigation = () => {
  return (
    <Nav>
      <NavLogo src={logoLight} alt="Logo" />
      <NavLinks>
        <Link to="projects" spy={true} smooth={true}>Projects</Link>
        <Link to="experience" spy={true} smooth={true}>Experience</Link>
        <Link to="contact" spy={true} smooth={true}>Contact</Link>
      </NavLinks>
    </Nav>
  )
}

export default Navigation