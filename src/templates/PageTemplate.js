import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Promos from "../components/Promos"
import FlowIn from "../components/FlowIn"
import { below } from "../utilities/styleHelpers"

const StyledHome = styled.main`
  display: grid;
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  width: 96rem;
  max-width: 90%;
  margin: 0 auto;
  #intro {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    h1 {
      text-align: center;
      margin-bottom: 5rem;
    }
    ${below.small`
      grid-column: left / right
  `}
  }
  #content {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    ${below.small`
      grid-column: left / right
  `}
  }
  #promos {
    grid-column: left / right;
  }
`

const PageTemplate = ({ data }) => {
  const {
    name,
    heroTitle,
    heroPrehead,
    heroCtaText,
    heroCtaLink,
    introHeadline,
    introContent,
    heroSize,
    body,
    promos,
  } = data.contentfulPage

  const heroImage = data.contentfulPage.heroImage

  return (
    <>
      <SEO title={name} />
      <Hero
        image={heroImage.fluid}
        imageAlt={heroImage.title}
        height={heroSize === "Large" ? 700 : heroSize === "Medium" ? 500 : 300}
        headline={heroTitle}
        prehead={heroPrehead}
        ctaText={heroCtaText}
        ctaLink={heroCtaLink}
      />
      <StyledHome>
        {introHeadline || introContent ? (
          <section id="intro">
            <FlowIn>
              <h1 key="headline">{introHeadline}</h1>
              <Markdown key="bodyCopy">{introContent.introContent}</Markdown>
            </FlowIn>
          </section>
        ) : null}
        {body ? (
          <section id="content">
            <FlowIn>
              <Markdown key="body">{body.body}</Markdown>
            </FlowIn>
          </section>
        ) : null}
        {promos ? (
          <section id="promos">
            <Promos promos={promos} />
          </section>
        ) : null}
      </StyledHome>
    </>
  )
}

export const data = graphql`
  query($name: String!) {
    contentfulPage(name: { eq: $name }) {
      name
      heroPrehead
      heroTitle
      heroCtaText
      heroCtaLink
      heroImage {
        title
        fluid(maxWidth: 2000) {
          aspectRatio
          sizes
          srcSet
          src
        }
      }
      heroSize
      introHeadline
      introContent {
        introContent
      }
      body {
        body
      }
      promos {
        title
        body
        ctaText
        ctaLink
        image {
          title
          fluid(maxWidth: 400) {
            srcSet
            aspectRatio
            base64
            src
            sizes
          }
        }
      }
    }
  }
`

export default PageTemplate
