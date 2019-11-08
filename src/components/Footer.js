import React from "react"
import styled from "styled-components"
import { fontFamilies } from "../utilities/styleHelpers"

const StyledFooter = styled.footer`
  background-color: rgb(26, 26, 26);
  padding: 6rem;
  .footer-content {
    width: 96rem;
    max-width: 90%;
    margin: 0 auto;
  }
  p {
    color: white;
    font-family: ${fontFamilies.sansSerif};
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-content">
        &copy; ${Date.now()} Rising Lotus Counseling Services
      </div>
    </StyledFooter>
  )
}

export default Footer
