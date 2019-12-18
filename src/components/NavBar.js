import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { useSpring, animated } from "react-spring"
import { useStaticQuery, graphql } from "gatsby"
import useMeasure from "../hooks/useMeasure"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import useScroll from "../hooks/useScroll"

const StyledHeader = styled(animated.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`

const StyledHeaderContents = styled.div`
  display: grid;
  width: 94vw;
  padding: 1rem 0;
  margin: 0 auto;
  grid-template-columns: auto minmax(100px, 1fr);
  grid-template-areas: "logo nav";
  justify-content: space-between;
  align-items: center;
`

const StyledLogo = styled.h1`
  font-size: 2rem;
  font-weight: normal;
  position: relative;
  z-index: 100;
  margin: 10px 0;
  a {
    color: white;
    text-decoration: none;
    outline: none;
    &:focus {
      text-decoration: underline;
    }
  }
  @media (min-width: 800px) {
    font-size: 3rem;
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
  const scroll = useScroll()
  const fadeInBg = useSpring({
    backgroundColor:
      scroll.y < 100 ? `rgba(26,26,26, ${scroll.y / 100})` : `rgba(26,26,26,1)`,
  })
  return (
    <StyledHeader {...ref} style={fadeInBg}>
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
