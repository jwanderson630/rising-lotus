import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
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

const BlogTemplate = ({ data }) => {
  const {
    name,
    title,
    content: { json: content },
  } = data.contentfulBlogPost
  console.log(content)
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        console.log(node)
        const img = node.data.target.fields.file["en-US"].url
        const description = node.data.target.fields.description["en-US"]
        return (
          <div className="blogImg">
            <img
              src={`${img}?fm=jpg&fl=progressive&w=1900`}
              alt={description ? description : ""}
            />
          </div>
        )
      },
    },
  }

  const heroImage = data.contentfulBlogPost.heroImage

  return (
    <>
      <SEO title={title} />
      <Hero
        image={heroImage.fluid}
        imageAlt={heroImage.title}
        height={500}
        headline={title}
      />
      <StyledBlog id={name}>
        <section id="content">
          {documentToReactComponents(content, options)}
        </section>
      </StyledBlog>
    </>
  )
}

export const data = graphql`
  query($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
      slug
      snippet
      heroImage {
        title
        fluid(maxWidth: 2000) {
          aspectRatio
          sizes
          srcSet
          src
        }
      }
      createdAt(formatString: "MMMM Do, YYYY")
      content {
        json
      }
    }
  }
`

export default BlogTemplate
