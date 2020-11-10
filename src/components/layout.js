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
          title,
          githubLink,
          twitterLink,
          products {
            title,
            url
          }
        }
      }
    }
  `);

  return (
    <>
      <div style={{ marginTop: '94px' }}>
        <main>{children}</main>
        <footer>
          <div className={'footerContainer'}>
            <div className={'footerLogo'}>
              <Link to={'/'}>
                <div className={'logoLargeDark'}/>
              </Link>
            </div>
            <div className={'footerColumn'}>
              <Link to={'/#about'}>About</Link>
              <Link to={'/contact'}>Contact</Link>
              {/*<Link to={''}>News</Link>*/}
            </div>
            <div className={'footerColumn'}>
              <Link to={'/products'} style={{ fontWeight: 'bold' }}>Products</Link>
              {
                data.site.siteMetadata.products.map((product, key) => (
                  <a key={key} href={product.url}>{product.title}</a>
                ))
              }
            </div>
            <div className={'footerColumn lastFooterColumn'}>
              <Link className={'logoLink'} to={data.site.siteMetadata.githubLink} target={'_blank'}>
                <span className={'linkLogo footerLinkLogo githubLogo'}/>GitHub
              </Link>
              <Link className={'logoLink'} to={data.site.siteMetadata.twitterLink} target={'_blank'}>
                <span className={'linkLogo footerLinkLogo twitterLogo'}/>Twitter
              </Link>
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
      <Header
        siteTitle={data.site.siteMetadata.title}
        githubLink={data.site.siteMetadata.githubLink}
        twitterLink={data.site.siteMetadata.twitterLink}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
