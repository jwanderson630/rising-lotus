import React from "react"
import styled from "styled-components"
import DesktopNavLink from "./DesktopNavLink"

const StyledNav = styled.nav`
  font-size: 1.5rem;
  text-transform: uppercase;
  display: flex;
  justify-content: flex-end;
`

const DesktopNav = ({ data }) => {
  const navLinks = data.allContentfulPage.edges
  return (
    <StyledNav>
      {navLinks.map(({ node: navLink }) => {
        return (
          <DesktopNavLink
            name={navLink.name}
            slug={navLink.slug}
            subPages={navLink.subpages}
            key={navLink.slug}
          />
        )
      })}
      <DesktopNavLink name="Contact" slug="/contact" />
    </StyledNav>
  )
}

export default DesktopNav
