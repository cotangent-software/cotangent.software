import PropTypes from "prop-types"
import React, { useState } from 'react'
import styles from './header.module.css'
import { Link } from 'gatsby';
import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { Divider } from 'antd/es';

const Header = ({ siteTitle, githubLink, twitterLink }) => {
  const mobileNavigation = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/#about' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' }
  ];
  
  const [ visible, setVisible ] = useState(false);
  
  function onClose() {
    setVisible(false);
  }
  
  return (
    <header>
      <div className={'flexCenter'}>
        <Link to={'/'} className={'noLink'} style={{display: 'flex', alignItems: 'center'}}>
          <div className={styles.logo}/>
          <h2 style={{margin: 0}} className={styles.siteTitle}>
            {siteTitle.slice(1)}
          </h2>
        </Link>
        <div style={{flexGrow: 1}}/>
        <nav className={'flexCenter'}>
          <Link to={'/#about'}>About</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/contact'}>Contact</Link>
          <a className={styles.handleLink} href={githubLink} target={'_blank'} style={{display: 'flex'}}>
            <span className={'abstractLogo githubLogo'}/>
          </a>
          <a className={styles.handleLink} href={twitterLink} target={'_blank'} style={{display: 'flex'}}>
            <span className={'abstractLogo twitterLogo'}/>
          </a>
        </nav>
        <div className={styles.compactMenu}>
          <Button shape='circle' icon={<MenuOutlined/>} onClick={() => setVisible(true)}/>
        </div>
      </div>
      <Drawer
        title='Cotangent Software'
        placement={'left'}
        closable={true}
        onClose={onClose}
        visible={visible}
      >
        {
          mobileNavigation.map(x => (
            <p key={x.name}>
              <Link to={x.url} onClick={onClose}>{x.name}</Link>
            </p>
          ))
        }
        <Divider/>
        <p>
          <Link to={githubLink} target={'_blank'}>GitHub</Link>
        </p>
        <p>
          <Link to={twitterLink} target={'_blank'}>Twitter</Link>
        </p>
      </Drawer>
    </header>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  githubLink: PropTypes.string,
  twitterLink: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
