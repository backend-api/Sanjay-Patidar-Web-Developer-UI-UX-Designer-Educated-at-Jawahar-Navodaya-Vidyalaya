import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaFolder } from 'react-icons/fa';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h1`
  font-size: 1.5rem; /* Reduced font size */
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  position: relative;

  &:hover {
    .SubNavList {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  font-size: 1rem; /* Reduced font size */

  &:hover {
    text-decoration: underline;
  }
`;

const SubNavList = styled.ul`
  list-style: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  background: #1a1c23;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  z-index: 1000;
  max-width: 200px;
  width: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  gap: 0.5rem;
  border-radius: 8px;
  /* Adjust the position to cover both Home and Projects links */
  top: calc(100% + 8px);
  left: 0;
  transform: translateX(0%);
`;

const SubNavItem = styled.li``;

const SubNavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-size: 0.9rem; /* Reduced font size */
  padding: 0.5rem 1rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center; /* Center the text and icon vertically */
  justify-content: center; /* Center the text and icon horizontally */

  & svg {
    margin-right: 0.5rem; /* Add spacing between the icon and text */
  }

  &:hover {
    background-color: #333;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo>Pixel Portfolio</Logo>
      <NavList>
        <NavItem>
          <NavLinkStyled to="/">
            <FaHome /> Home
          </NavLinkStyled>
        </NavItem>
        <NavItem>
          <NavLinkStyled to="/projects">
            <FaFolder /> Projects
          </NavLinkStyled>
          <SubNavList className="SubNavList">
            <SubNavItem>
              <SubNavLinkStyled to="/projects/web">
                 Web Projects
              </SubNavLinkStyled>
            </SubNavItem>
            <SubNavItem>
              <SubNavLinkStyled to="/projects/mobile">
                 Mobile Projects
              </SubNavLinkStyled>
            </SubNavItem>
            <SubNavItem>
              <SubNavLinkStyled to="/projects/other">
                 Other Projects
              </SubNavLinkStyled>
            </SubNavItem>
          </SubNavList>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
