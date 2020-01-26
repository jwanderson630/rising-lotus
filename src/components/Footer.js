import React from "react"
import styled from "styled-components"
import { fontFamilies } from "../utilities/styleHelpers"
import psychTodayLogo from "../../public/images/psychologyTodayLogo.svg"

const StyledFooter = styled.footer`
  background-color: rgb(26, 26, 26);
  padding: 6rem 0;
  color: white;
  font-size: 1.6rem;
  font-family: ${fontFamilies.sansSerif};
  line-height: 1.5;
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
    outline: none;
    &:visited {
      color: white;
    }
    &:hover,
    &:focus {
      outline: none;
      text-decoration: underline;
    }
  }
  .certifications {
    margin-top: 15px;
    img {
      width: 150px;
      position: relative;
      right: 3px;
    }
  }
`

const Footer = () => {
  const date = new Date()
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="contact">
          <a href="tel:15036108548">(503) 610-8548</a> |{" "}
          <a href="mailto:RisingLotusCounselingServices@gmail.com">
            RisingLotusCounselingServices@gmail.com
          </a>
        </div>
        <div className="copyright">
          1110 SE Alder St, Portland, OR 97214
          <br />
          &copy; {date.getFullYear()} Rising Lotus, LLC
        </div>
        <div className="certifications">
          <a href="https://www.psychologytoday.com/profile/471723">
            <img
              id="verification"
              src={psychTodayLogo}
              alt="Verified By Psychology Today"
            />
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
