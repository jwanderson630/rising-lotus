import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { lighten } from "polished"
import { colors, boxShadows, transitions } from "../utilities/styleHelpers"

const StyledCta = styled.div`
  text-transform: uppercase;
  background-color: ${colors.primary};
  display: inline-block;
  padding: 1.5rem 2.5rem;
  border-radius: 8rem;
  color: white;
  text-decoration: none;
  font-size: 1.6rem;
  transition: ${transitions("box-shadow", "transform", "background-color")};
  transform: translate3d(0, 0, 0);
  box-shadow: ${boxShadows.down};
  &:hover,
  &:active,
  &:focus {
    transform: translate3d(0, -0.25rem, 0);
    box-shadow: ${boxShadows.up};
    background-color: ${lighten(0.02, colors.primary)};
  }
`

const CtaLink = ({ link, text }) => {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
      <StyledCta>{text}</StyledCta>
    </Link>
  )
}

export default CtaLink
