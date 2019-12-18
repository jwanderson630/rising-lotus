import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { below, above } from "../utilities/styleHelpers"

const StyledInputField = styled.div``

const StyledHome = styled.main`
  display: grid;
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  width: 94vw;
  margin: 0 auto;
  #form {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    h1 {
      text-align: center;
      margin-bottom: 5rem;
      ${below.medium`
      text-align: left;
      `}
    }
    ${below.small`
      grid-column: left / right;
  `}
    .contact-page {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 1fr;
      ${above.large`
      grid-template-columns: 1fr 2fr;
      `}
      .img-container {
        text-align: center;
      }
    }
  }
`

const Contact = ({ data }) => {
  const heroImage = data.allContentfulAsset.edges[0].node
  return (
    <>
      <SEO title="Contact" />
      <Hero
        image={heroImage.fluid}
        headline="Contact"
        imageAlt={heroImage.title}
        height={300}
      />
      <StyledHome id="Contact">
        <section id="form">
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/success"
          >
            <StyledInputField>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </StyledInputField>
            <StyledInputField>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </StyledInputField>
            <StyledInputField>
              <label htmlFor="message">Message</label>
              <textarea id="message" />
            </StyledInputField>
            <div className="btnRow">
              <button type="submit">Send</button>
            </div>
            <input type="hidden" name="form-name" value="contact" />
          </form>
        </section>
      </StyledHome>
    </>
  )
}

export const data = graphql`
  query contactHeroImage {
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

export default Contact
