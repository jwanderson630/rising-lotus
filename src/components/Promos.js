import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import CtaLink from "./CtaLink"
import FlowIn from "./FlowIn"
import { below, boxShadows } from "../utilities/styleHelpers"

const StyledPromo = styled.article`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem;
  align-content: center;
  margin-bottom: 8rem;
  ${below.small`
  grid-template-columns: 1fr;
    `}
  .promo-img-wrapper {
    order: ${props => (props.alternating ? (props.index % 2 ? 2 : 1) : 2)};
    ${below.small`
      order: 1;
    `}
    .promo-img {
      padding: 1rem;
      box-shadow: ${boxShadows.down};
      border-radius: 0.4rem;
      img {
        border-radius: 0.2rem;
      }
    }
  }
  .promo-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    order: ${props => (props.alternating ? (props.index % 2 ? 1 : 2) : 1)};
    ${below.small`
    order: 2;
  `}
    h3 {
      font-size: 1.6rem;
      text-transform: uppercase;
      color: rgba(26, 26, 26, 0.5);
      font-weight: normal;
      margin: 0;
    }
    p {
      font-size: 2.2rem;
    }
  }
`

const Promos = ({ promos, alternating = true }) => {
  return (
    <>
      {promos.map((promo, promoIndex) => {
        const {
          title,
          body,
          ctaLink,
          ctaText,
          image: { title: imageTitle, fluid },
        } = promo

        return (
          <StyledPromo index={promoIndex} key={title} alternating={alternating}>
            <div className="promo-img-wrapper">
              <FlowIn>
                <div className="promo-img">
                  <Img
                    style={{ maxHeight: "350px" }}
                    fluid={fluid}
                    alt={imageTitle}
                    key="image"
                  />
                </div>
              </FlowIn>
            </div>
            <div className="promo-text">
              <FlowIn>
                <h3 key="title">{title}</h3>
                <p key="body">{body}</p>
                {ctaLink && ctaText ? (
                  <div key="cta" className="promo-cta">
                    <CtaLink link={ctaLink} text={ctaText} />
                  </div>
                ) : null}
              </FlowIn>
            </div>
          </StyledPromo>
        )
      })}
    </>
  )
}

export default Promos
