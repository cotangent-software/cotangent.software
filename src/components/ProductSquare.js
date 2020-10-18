import styles from '../styles/index.module.css';
import IndexActionButton from './IndexActionButton';
import React from 'react';

const NewTag = () => (
  <span style={{ borderRadius: '20px', backgroundColor: 'red', color: 'white', fontSize: '14pt', padding: '5px' }}>
    New
  </span>
);

const ProductSquare = ({ title, description, url, logo, isNew }) => (
  <div className={styles.productSquare}>
    <div className={styles.productSquareContent}>
      <div className={styles.productSquareHeader}>
        { logo && <div style={{ backgroundImage: 'url("' +logo + '")'}} className={styles.productSquareLogo}/> }
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '15px' }}>{title}</h1>
          { isNew && <><div style={{ marginLeft: '12px' }}/><NewTag/></> }
        </div>
      </div>
      <div style={{ margin: '0 3px', display: 'flex' }}>
        <p style={{ marginRight: '10px' }}>
          {description}
        </p>
        <p style={{ minWidth: 'fit-content'}}>
          <IndexActionButton external href={url}>Go &gt;</IndexActionButton>
        </p>
      </div>
    </div>
  </div>
);

export default ProductSquare;