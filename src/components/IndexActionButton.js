import React from 'react';
import styles from './IndexActionButton.module.css';

const IndexActionButton = ({ children }) => (
  <button className={styles.rootButton}>
    {children}
  </button>
);

export default IndexActionButton;