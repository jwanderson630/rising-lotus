import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MobileNavDropdown from "./Dropdown"
import Underline from "./Underline"
import { useSpring, animated } from "react-spring"
import { transitions } from "../utilities/styleHelpers"

const StyledNavLink = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
    color: white;
  }
  margin: 0.5rem 1rem;
`

const StyledOpenButton = styled(animated.button)`
  margin-left: 2rem;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 50%;
  border: none;
  font-size: 6rem;
  line-height: 25px;
  font-weight: normal;
  color: white;
  padding: 0.5rem;
  justify-content: center;
  align-content: center;
  outline: none;
  transition: ${transitions("background-color")};
  &:focus {
    background-color: rgba(255, 255, 255, 0.15);
  }
`

const MobileNavLink = ({ name, slug, subPages, dropdownFloat }) => {
  const [open, setOpen] = useState(false)
  const turn = useSpring({
    transform: open ? "rotate(135deg)" : `rotate(0deg)`,
  })
  return (
    <>
      <StyledNavLink>
        <Link to={slug}>{name}</Link>
        {subPages ? (
          <StyledOpenButton onClick={() => setOpen(!open)} style={turn}>
            +
          </StyledOpenButton>
        ) : null}
      </StyledNavLink>
      <Underline open={open} origin="left" />
      {subPages ? (
        <MobileNavDropdown
          dropdownItems={subPages}
          open={open}
          floating={dropdownFloat}
        />
      ) : null}
    </>
  )
}

export default MobileNavLink
