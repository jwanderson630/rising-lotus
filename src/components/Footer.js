import React from "react"
import styled from "styled-components"
import { fontFamilies } from "../utilities/styleHelpers"

const StyledFooter = styled.footer`
  background-color: rgb(26, 26, 26);
  padding: 6rem 0;
  color: white;
  font-size: 1.6rem;
  font-family: ${fontFamilies.sansSerif};
  .footer-content {
    width: 94vw;
    margin: 0 auto;
  }
  .contact {
    margin-bottom: 1.5rem;
  }
  a {
    text-decoration: none;
    color: white;
    &:visited {
      color: white;
    }
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
`

const Footer = () => {
  const date = new Date()
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="contact">
          <a href="tel:15036108548">503-610-8548</a> |{" "}
          <a href="mailto:RisingLotusCounselingServices@gmail.com">Email</a>
        </div>
        <div className="copyright">
          &copy; {date.getFullYear()} Rising Lotus Counseling Services
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
