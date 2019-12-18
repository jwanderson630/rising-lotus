import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../../node_modules/normalize.css/normalize.css"
import NavBar from "./NavBar"
import GlobalStyles from "./GlobalStyles"
import Footer from "./Footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <NavBar title={data.site.siteMetadata.title} />
      {children}
      <Footer />
      <GlobalStyles />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
