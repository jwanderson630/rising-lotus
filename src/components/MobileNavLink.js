import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MobileNavDropdown from "./MobileNavDropdown"
import Underline from "./Underline"
import { useSpring, animated } from "react-spring"
import { transitions } from "../utilities/styleHelpers"

const StyledNavLink = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease-in-out;
  padding: 10px;
  border-radius: 4px;
  a {
    text-decoration: none;
    color: white;
    outline: none;
  }
  ${({ focused }) =>
    focused
      ? `background-color: rgba(255, 255, 255, 0.15);`
      : `background-color: rgba(255, 255, 255, 0);`}
`

const StyledOpenButton = styled(animated.button)`
  margin-left: 2rem;
  background-color: #1a1a1a;
  border-radius: 50%;
  border: none;
  font-weight: normal;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 8px;
  outline: none;
  transition: ${transitions("background-color")};
  transform-origin: center center;
  svg {
    width: 20px;
    path {
      fill: white;
    }
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }
`

const MobileNavLink = ({ name, slug, subPages, dropdownFloat, closeMenu }) => {
  const [open, setOpen] = useState(false)
  const [focus, setFocus] = useState(false)
  const turn = useSpring({
    transform: open ? "rotate(135deg)" : `rotate(0deg)`,
  })
  return (
    <>
      <StyledNavLink focused={focus}>
        <Link
          to={slug}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onClick={closeMenu}
        >
          {name}
        </Link>
        {subPages ? (
          <StyledOpenButton onClick={() => setOpen(!open)} style={turn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
            </svg>
          </StyledOpenButton>
        ) : null}
      </StyledNavLink>
      <Underline origin="left" open={open} />
      {subPages ? (
        <MobileNavDropdown
          dropdownItems={subPages}
          open={open}
          floating={dropdownFloat}
          closeMenu={closeMenu}
        />
      ) : null}
    </>
  )
}

export default MobileNavLink
