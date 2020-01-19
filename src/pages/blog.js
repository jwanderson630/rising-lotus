import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { below, colors } from "../utilities/styleHelpers"

const StyledBlog = styled.main`
  display: grid;
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  width: 94vw;
  margin: 0 auto;
  #content {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    ${below.small`
      grid-column: left / right
  `}
    .blogImg {
      display: flex;
      align-content: center;
      margin-top: 30px;
      img {
        width: auto;
        max-width: 100%;
        max-height: 500px;
        margin: 0 auto;
      }
    }
    a {
      color: ${colors.primary};
    }
  }
`

const Blog = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges

  const heroImage = data.contentfulAsset
  console.log(blogPosts)
  return (
    <>
      <SEO title="Blog" />
      <Hero
        image={heroImage.fluid}
        imageAlt={heroImage.title}
        height={500}
        headline="Blog"
      />
      <StyledBlog id="posts">
        <section id="content"></section>
      </StyledBlog>
    </>
  )
}

export const data = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM Do, YYYY")
          id
          snippet
          heroImage {
            fluid(maxWidth: 200) {
              aspectRatio
              sizes
              srcSet
              src
            }
          }
        }
      }
    }
    contentfulAsset(id: { eq: "cb7a8fde-6614-5a6b-abd3-8d05239f0c65" }) {
      title
      fluid(maxWidth: 2000) {
        aspectRatio
        sizes
        srcSet
        src
      }
    }
  }
`

export default Blog
