import React from 'react';
import styles from './IndexActionButton.module.css';
import { Link } from 'gatsby';

const IndexActionButton = ({ children, href }) => (
  <Link to={href} className={styles.rootButton}>
    {children}
  </Link>
);

export default IndexActionButton;