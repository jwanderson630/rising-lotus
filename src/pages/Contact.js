import React, { useState } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { navigate } from "gatsby-link"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { below, above, colors } from "../utilities/styleHelpers"

const StyledInputField = styled.div``

const StyledHome = styled.main`
  display: grid;
  grid-column-gap: 4rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto auto;
  grid-template-areas:
    "intro"
    "info"
    "form"
    "map";
  ${above.medium`
  grid-template-columns: [left] 5% [main-start] 1fr [center] 1fr [main-end] 5% [right];
  grid-template-rows: auto auto 1fr;
  grid-template-areas:
    "left intro intro right"
    "left info form right"
    "left map form right";
  `}
  ${above.large`
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  `}
  width: 94vw;
  margin: 0 auto 4rem;
  #intro {
    grid-area: intro;
    margin-bottom: 4rem;
    *:last-child {
      margin-bottom: 0;
    }
  }
  #info {
    grid-area: info;
    margin-bottom: 4rem;
    .contactLink {
      color: ${colors.darkGrey};
      font-size: 1.6rem;
      text-decoration: none;
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: 1rem;
      align-content: center;
      &:first-child {
        margin-bottom: 4rem;
      }
      span {
        display: grid;
        align-content: center;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
  #map {
    grid-area: map;
    margin-bottom: 4rem;
    iframe {
      width: 100%;
    }
  }
  #form {
    grid-area: form;
    margin-bottom: 4rem;

    h1 {
      text-align: center;
      margin-bottom: 5rem;
      ${below.medium`
      text-align: left;
      `}
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
        <section id="intro">
          <p>
            Call or Email to schedule your free 15 minute consultation. Or in a
            brief couple of sentences tell me why you are seeking services
            below.
          </p>
        </section>
        <section id="info">
          <a className="contactLink" href="tel:15036108548">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colors.darkGrey}
              >
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"
                  fill={colors.darkGrey}
                />
              </svg>
            </span>
            <span>(503) 610-8548</span>
          </a>
          <a
            className="contactLink"
            href="mailto:RisingLotusCounselingServices@gmail.com"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={colors.darkGrey}
              >
                <path
                  fill={colors.darkGrey}
                  d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
                />
              </svg>
            </span>
            <span>RisingLotusCounselingServices@gmail.com</span>
          </a>
        </section>
        <section id="map">
          <iframe
            title="1110 SE Alder St, Portland, OR 97214"
            height="280"
            frameborder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJsYI0XqGglVQRHLvod5AV3R4&key=AIzaSyBpuPJpdbQsTsZN7Oz556wHQpXspmKMXSc"
            allowfullscreen
          ></iframe>
        </section>
        <section id="form">
          <form
            name="contact"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
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
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out:{" "}
                <input name="bot-field" onChange={handleChange} />
              </label>
            </p>
          </form>
        </section>
      </StyledHome>
    </>
  )
}

export const data = graphql`
  query {
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
