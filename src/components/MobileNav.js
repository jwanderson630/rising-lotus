import React, { useState, useRef } from "react"
import styled from "styled-components"
import { colors } from "../utilities/styleHelpers"
import MobileNavLink from "./MobileNavLink"
import { useSpring, useChain, animated } from "react-spring"

const StyledNav = styled(animated.nav)`
  font-size: 2.5rem;
  line-height: 1.5;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflowy: scroll;
  background-color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledNavLinks = styled(animated.div)`
  width: 500px;
  max-width: 60vw;
  margin: 0 auto;
`

const StyledOpenButton = styled.button`
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 0;
  text-align: right;
  position: fixed;
  top: 4rem;
  right: 4rem;
  z-index: 20;
  background: none;
  border: none;
  width: 20px;
  height: 20px;
  svg {
    width: 100%;
    height: auto;
  }
`

const MobileNav = ({ data }) => {
  const navLinks = data.allContentfulPage.edges
  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
    document.querySelector("body").style.overflowY = !open
      ? "hidden"
      : "initial"
  }
  const navRef = useRef()
  const menuRef = useRef()
  const fadeIn = useSpring({
    opacity: open ? 1 : 0,
    pointerEvents: open ? "all" : "none",
  })
  const riseUp = useSpring({
    transform: open ? `translate3d(0, 0px, 0)` : `translate3d(0,3rem,0)`,
  })
  return (
    <>
      <StyledOpenButton onClick={toggleMenu}>
        <svg
          width="100"
          height="60"
          viewBox="0 0 100 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H100V10H0V0Z" fill="#FFFFFF" />
          <path d="M0 30H100V40H0V30Z" fill="#FFFFFF" />
          <path d="M0 60H100V70H0V60Z" fill="#FFFFFF" />
        </svg>
      </StyledOpenButton>
      <StyledNav ref={navRef} style={fadeIn}>
        <StyledNavLinks ref={menuRef} style={riseUp}>
          {navLinks.map(({ node: navLink }) => {
            return (
              <MobileNavLink
                name={navLink.name}
                slug={navLink.slug}
                subPages={navLink.subpages}
                key={navLink.slug}
                dropdownFloat={false}
              />
            )
          })}
          <MobileNavLink name="Contact" slug="/contact" />
        </StyledNavLinks>
      </StyledNav>
    </>
  )
}

export default MobileNav
