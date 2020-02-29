import React from "react"
import styled from "styled-components"
import { fontFamilies } from "../utilities/styleHelpers"

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
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    @media (min-width: 768px) {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }
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
    margin-top: 30px;
    img {
      width: 100px;
      position: relative;
      right: 3px;
      display: inline-block;
      margin-right: 20px;
    }
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`

const Footer = () => {
  const date = new Date()
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="info">
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
        </div>
        <div className="certifications">
          <a
            href="https://www.therapyden.com/therapist/lindsay-anderson-portland-or"
            rel="nofollow noreferrer"
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/therapyden1/logos/therapyden-web-badge.png"
              alt="TherapyDen"
            />
          </a>
          <a
            href="https://www.portlandtherapycenter.com/therapists/lindsay-anderson"
            rel="nofollow noreferrer"
          >
            <img
              src="https://www.portlandtherapycenter.com/lib/img/therapist_badge_sm.png"
              alt="Portland Therapy Center"
            />
          </a>
        </div>
      </div>
    </StyledFooter>
  )
}

export default Footer
