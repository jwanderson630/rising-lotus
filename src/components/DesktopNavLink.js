import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import useHoveredOver from "../hooks/useHoveredOver"
import Dropdown from "./Dropdown"
import Underline from "./Underline"

const StyledNavLink = styled.div`
  position: relative;
  a {
    text-decoration: none;
    color: white;
    outline: none;
  }
  margin: 0 1rem;
  &:last-child {
    margin-right: 0;
  }
`

const DesktopNavLink = ({ name, slug, subPages }) => {
  const [hovered, hoverRef] = useHoveredOver()
  return (
    <StyledNavLink ref={hoverRef}>
      <Link to={slug}>{name}</Link>
      <Underline open={hovered} />
      {subPages ? (
        <Dropdown dropdownItems={subPages} open={hovered} floating="true" />
      ) : null}
    </StyledNavLink>
  )
}

export default DesktopNavLink
