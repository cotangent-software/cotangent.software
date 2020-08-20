/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from 'gatsby'

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <div style={{ marginTop: '94px' }}>
        <main>{children}</main>
        <footer>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '5rem' }}>
              <Link to={'/'}>
                <div className={'logoLargeDark'}/>
              </Link>
            </div>
            <div className={'footerColumn'}>
              <Link to={''}>About</Link>
              <Link to={''}>Contact</Link>
              <Link to={''}>News</Link>
            </div>
            <div className={'footerColumn'}>
              <span>Products</span>
              <Link to={''}>Dataflow</Link>
              <Link to={'http://prismacademy.xyz'}>Prism.academy</Link>
            </div>
            <div style={{ position: 'absolute', bottom: 15, right: 20, color: '#a1a1a1', textAlign: 'right' }}>
              <div className={'privacySection'}>
                <Link to={'/privacy-policy'}>Privacy Policy</Link>
              </div>
              <div>© {new Date().getFullYear()} {data.site.siteMetadata.title} LLC</div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
