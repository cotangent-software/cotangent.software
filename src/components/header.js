import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'
import { Link } from 'gatsby';

const Header = ({ siteTitle }) => (
  <header>
    <div className={'flexCenter'}>
      <Link to={'/'} className={'noLink'} style={{ display: 'flex' }}>
        <div className={styles.logo}/>
        <h1 style={{ margin: 0 }}>
          {siteTitle.slice(1)}
        </h1>
      </Link>
      <div style={{ flexGrow: 1 }}/>
      <nav className={'flexCenter'}>
        <Link to={'#about'}>About</Link>
        <Link to={'#products'}>Products</Link>
        <Link to={'#contact'}>Contact</Link>
        <Link to={'https://github.com/cotangent-software'} target={'_blank'}><span className={styles.githubLogo}/></Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
