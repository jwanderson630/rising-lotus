import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { below, colors, fontFamilies } from "../utilities/styleHelpers"
import useHoveredOver from "../hooks/useHoveredOver"
import Underline from "../components/Underline"
import FlowIn from "../components/FlowIn"

const StyledBlog = styled.main`
  display: grid;
  grid-template-columns: [left] 15% [main-start] 1fr [center] 1fr [main-end] 15% [right];
  width: 94vw;
  margin: 0 auto;
  #posts {
    grid-column: main-start / main-end;
    margin-bottom: 10rem;
    ${below.small`
      grid-column: left / right
  `}
    .flowItem {
      .blogPost {
        border-bottom: 1px solid rgba(66, 66, 66, 0.1);
      }
      &:last-child {
        .blogPost {
          border: 0;
          margin-bottom: 0;
        }
      }
    }
    .blogPost {
      text-align: center;
      max-width: 600px;
      margin: 0 auto 6rem;
      padding-bottom: 6rem;

      h2 {
        font-size: 2.5rem;
        font-family: ${fontFamilies.sansSerif};
      }
      .date {
        font-family: ${fontFamilies.sansSerif};
        font-size: 1.5rem;
        color: rgba(66, 66, 66, 0.6);
        margin: 2rem auto 2rem;
      }
      .snippet {
        font-size: 2rem;
        margin: 2rem auto 4rem;
      }
      .cta {
        display: inline-block;
        margin: 0 auto;
        a {
          font-size: 1.5rem;
          color: ${colors.darkGrey};
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          outline: none;
        }
      }
    }
  }
`

const BlogPost = ({ post }) => {
  const [hovered, hoverRef] = useHoveredOver()
  return (
    <article className="blogPost" key={post.slug}>
      <h2>{post.title}</h2>
      <p className="date">{post.createdAt}</p>
      <p className="snippet">{post.snippet}</p>
      <div className="cta" ref={hoverRef}>
        <Link to={`/blog/${post.slug}`}>Read more</Link>
        <Underline open={hovered} color={colors.darkGrey} />
      </div>
    </article>
  )
}

const Blog = ({ data }) => {
  const blogPosts = data.allContentfulBlogPost.edges
  const heroImage = data.contentfulAsset
  return (
    <>
      <SEO title="Blog" />
      <Hero
        image={heroImage.fluid}
        imageAlt={heroImage.title}
        height={300}
        headline="Blog"
      />
      <StyledBlog>
        <div id="posts">
          <FlowIn>
            {blogPosts.map(({ node: post }) => {
              return <BlogPost key={post.slug} post={post} />
            })}
          </FlowIn>
        </div>
      </StyledBlog>
    </>
  )
}

export const data = graphql`
  query {
    allContentfulBlogPost(sort: { order: DESC, fields: createdAt }) {
      edges {
        node {
          title
          slug
          createdAt(formatString: "MMMM DD, YYYY")
          id
          snippet
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
