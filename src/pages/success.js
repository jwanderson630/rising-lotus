import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { below } from "../utilities/styleHelpers"

const StyledHome = styled.main`
  display: grid;
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  width: 94vw;
  margin: 0 auto;
  #Success {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    text-align: center;
    ${below.small`
      grid-column: left / right;
  `}
  }
`

const Success = ({ data }) => {
  const heroImage = data.allContentfulAsset.edges[0].node
  return (
    <>
      <SEO title="Success" />
      <Hero
        image={heroImage.fluid}
        headline="Contact"
        imageAlt={heroImage.title}
        height={300}
      />
      <StyledHome>
        <div id="Success">
          <h1>Thank you!</h1>
          <p>I will be in touch soon.</p>
        </div>
      </StyledHome>
    </>
  )
}

export const data = graphql`
  query successHeroImage {
    allContentfulAsset(filter: { title: { eq: "Pink Lotus Flower" } }) {
      edges {
        node {
          fluid(maxWidth: 2000) {
            aspectRatio
            sizes
            src
            srcSet
          }
        }
      }
    }
  }
`

export default Success
