import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { fontFamilies } from "../utilities/styleHelpers"
import CtaLink from "./CtaLink"
import FlowIn from "./FlowIn"

const StyledHero = styled.div`
  height: ${props => (props.height ? `${props.height}px` : "500px")};
  position: relative;
  display: grid;
  grid-template-areas: "hero";
  grid-template-rows: ${props =>
    props.height ? `${props.height}px` : "500px"};
  grid-template-columns: 1fr;
  margin-bottom: 10rem;
  .content {
    position: relative;
    grid-area: hero;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`

const StyledHeadline = styled.section`
  width: 90vw;
  margin: 0 auto;
  position: relative;
  z-index: 5;
  text-align: center;
  h2 {
    color: white;
    font-size: 3rem;
    text-align: center;
    margin: 2rem 0;
    font-weight: normal;
    @media (min-width: 800px) {
      font-size: 3.5rem;
    }
    @media (min-width: 1200px) {
      font-size: 4.5rem;
    }
  }
  .prehead {
    text-transform: uppercase;
    color: white;
    font-style: italic;
    font-size: 2rem;
    text-align: center;
    margin: 2rem 0;
    font-weight: 100;
    font-family: ${fontFamilies.serif};
  }
`

const Hero = props => {
  const {
    image,
    imageAlt,
    headline,
    prehead,
    subhead,
    ctaLink,
    ctaText,
    height,
  } = props

  return (
    <StyledHero height={height} id="hero">
      <div style={{ gridArea: "hero", height: "100%", width: "100%" }}>
        <Img style={{ height: "100%" }} fluid={image} alt={imageAlt} />
      </div>
      <div className="content">
        <StyledHeadline>
          <FlowIn>
            {prehead ? (
              <div className="prehead" key="prehead">
                {prehead}
              </div>
            ) : null}
            <h2 key="headline">{headline}</h2>
            {subhead ? <p>{subhead}</p> : null}
            {ctaLink && ctaText ? (
              <CtaLink key="cta" link={ctaLink} text={ctaText} />
            ) : null}
          </FlowIn>
        </StyledHeadline>
      </div>
    </StyledHero>
  )
}

export default Hero
