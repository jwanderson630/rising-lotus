import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import useMeasure from "../hooks/useMeasure"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

const StyledHeaderContents = styled.div`
  display: grid;
  width: calc(100% - 6rem);
  padding: 1rem 0;
  margin: 0 auto;
  grid-template-columns: auto minmax(100px, 1fr);
  grid-template-areas: "logo nav";
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.h1`
  font-size: 3rem;
  font-weight: normal;
  a {
    color: white;
    text-decoration: none;
  }
`

const NavBar = ({ title }) => {
  const [ref, { width }] = useMeasure()
  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  const data = useStaticQuery(graphql`
    query GetNavigation {
      allContentfulPage(
        filter: { showInNav: { eq: true }, subfield: { eq: false } }
      ) {
        edges {
          node {
            name
            slug
            subpages {
              name
              slug
              parentPage {
                slug
              }
            }
          }
        }
      }
    }
  `)
  return (
    <StyledHeader {...ref}>
      <animated.div style={{ ...fadeIn }}>
        <StyledHeaderContents>
          <StyledLogo>
            <Link to="/">{title}</Link>
          </StyledLogo>
          {width > 940 ? <DesktopNav data={data} /> : <MobileNav data={data} />}
        </StyledHeaderContents>
      </animated.div>
    </StyledHeader>
  )
}

export default NavBar
