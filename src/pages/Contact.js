import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { navigate } from "gatsby-link"
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
  const [state, setState] = useState({})

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  function handleChange({ target }) {
    setState({ ...state, [target.name]: target.value })
  }
  function handleSubmit({ target: form }) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

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
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
            onSubmit={handleSubmit}
          >
            <StyledInputField>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                required
              />
            </StyledInputField>
            <StyledInputField>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                required
              />
            </StyledInputField>
            <StyledInputField>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                required
              />
            </StyledInputField>
            <StyledInputField>
              <label htmlFor="message">Message</label>
              <textarea
                style={{ height: "100px" }}
                id="message"
                name="message"
                onChange={handleChange}
              />
            </StyledInputField>
            <div className="btnRow">
              <button type="submit">Send</button>
            </div>
            <input type="hidden" name="bot-field" />
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
