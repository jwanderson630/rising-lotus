import React, { useState, useRef } from "react"
import styled from "styled-components"
import { colors } from "../utilities/styleHelpers"
import MobileNavLink from "./MobileNavLink"
import { useSpring, animated } from "react-spring"
import Hamburger from "react-hamburger-menu"

const StyledNav = styled(animated.nav)`
  font-size: 1.8rem;
  line-height: 1.5;
  text-transform: uppercase;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background-color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
`
const StyledNavLinks = styled(animated.div)`
  width: 90vw;
  max-width: 500px;
  margin: 0 auto;
`
const StyledOpenButton = styled.div`
  z-index: 20;
  display: flex;
  justify-content: flex-end;
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
  const closeMenu = () => {
    setOpen(false)
    document.querySelector("body").style.overflowY = "initial"
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
      <StyledOpenButton>
        <Hamburger
          isOpen={open}
          menuClicked={toggleMenu}
          color="white"
          height={20}
          width={25}
        />
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
                closeMenu={closeMenu}
              />
            )
          })}
          <MobileNavLink name="Contact" slug="/contact" closeMenu={closeMenu} />
        </StyledNavLinks>
      </StyledNav>
    </>
  )
}

export default MobileNav
