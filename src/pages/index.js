import React, { useEffect, useRef, useState } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/index.module.css'
import IndexActionButton from '../components/IndexActionButton';
import { graphql, Link } from 'gatsby';
import ProductSquare from '../components/ProductSquare';


function IndexPage({ data }) {
  const products = data.site.siteMetadata.products;

  const [update, setUpdate] = useState(0);
  const [rectValuesLeft, setRectValuesLeft] = useState({});
  const [rectValuesRight, setRectValuesRight] = useState({});
  
  const mainBar = useRef()
  const leftCanvasContainer = useRef();
  const rightCanvasContainer = useRef();
  const centerContainer = useRef();
  const leftCanvas = useRef();
  const rightCanvas = useRef();
  useEffect(() => {
    function resizeCanvas() {
      if(leftCanvas.current.width === 0) {
        leftCanvas.current.width = (window.innerWidth - centerContainer.current.getBoundingClientRect().width) / 2;
        rightCanvas.current.width = (window.innerWidth - centerContainer.current.getBoundingClientRect().width) / 2;
        leftCanvas.current.height = mainBar.current.getBoundingClientRect().height;
        rightCanvas.current.height = mainBar.current.getBoundingClientRect().height;
      }
    }
    resizeCanvas();
    
    function drawPattern(canvas, c, rectSize, rectValues, left=true) {
      const r = 255;
      const g = 100;
      const b = 13;
      
      c.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < canvas.width / rectSize; x++) {
        for (let y = 0; y < canvas.height / rectSize; y++) {
          const xNorm = x / (canvas.width / rectSize);
          const yNorm = y / (canvas.height / rectSize);
          
          let prob = 0.0;
          const diffuse = 4;
          if(left) {
            prob = (xNorm - 1) + Math.exp(-Math.pow(yNorm * diffuse - (diffuse / 2), 2));
          }
          else {
            prob = -xNorm + Math.exp(-Math.pow(yNorm * diffuse - (diffuse / 2), 2));
          }
          
          if (rectValues[x + ' ' + y] === undefined) rectValues[x + ' ' + y] = Math.random() < prob ? prob : 0;
          const rv = rectValues[x + ' ' + y];
          if (rv > 0) {
            const rt = r;
            const gt = g + (255 - g) * (1 - rv);
            const bt = b + (255 - b) * (1 - rv);
            c.fillStyle = 'rgb(' + rt + ',' + gt + ',' + bt + ')';
            c.fillRect(x * rectSize + (left ? canvas.width % rectSize : 0), y * rectSize, rectSize, rectSize);
          }
        }
      }
    }
    
    const leftC = leftCanvas.current.getContext('2d');
    const rightC = rightCanvas.current.getContext('2d');
    
    const rv = {};
    const rectSize = 15;
    drawPattern(leftCanvas.current, leftC, rectSize, {});
    drawPattern(rightCanvas.current, rightC, rectSize, {}, false);
  
  
    function handleResize() {
      leftCanvas.current.width = 0;
      rightCanvas.current.width = 0;
      leftCanvas.current.height = 0;
      rightCanvas.current.height = 0;
      setUpdate(update + 1);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });
  return (
    <Layout>
      <SEO title="Home"/>
      <div ref={mainBar} className={styles.mainBar}>
        <div ref={leftCanvasContainer} style={{ flexGrow: 10 }}>
          <canvas ref={leftCanvas} width={'0'} className={styles.sideCanvas}> </canvas>
        </div>
        <div ref={centerContainer} style={{ flexGrow: 1, height: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '15px' }}>Software for the future</h1>
          <IndexActionButton href={'/products'}>See our products > </IndexActionButton>
        </div>
        <div ref={rightCanvasContainer} style={{ flexGrow: 10 }}>
          <canvas ref={rightCanvas} width={'0'} className={styles.sideCanvas}> </canvas>
        </div>
      </div>
      <div className={styles.aboutContainer} id={'about'}>
        <h3>About Us</h3>
        <div>
          <p>
            We are devoted to building software that makes lives easier. Our main goal in developing
            Dataflow was to streamline development reducing redundant efforts. Likewise, our goal in developing
            Prism academy was to help people with a passion reach their goals.
          </p>
        </div>
      </div>
      <div className={styles.productsContainer} id={'products'}>
        <Link to={'/products'}>
          <h3>Products</h3>
        </Link>
        <div className={styles.productsGrid}>
          {
            products.map((product, key) => (
              <ProductSquare
                key={key}
                title={product.title}
                description={product.description}
                url={product.url}
                logo={product.logo}
                isNew={product.isNew}
              />
            ))
          }
        </div>
        <IndexActionButton href={'/products'}>See All > </IndexActionButton>
      </div>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        products {
          title,
          description,
          url,
          logo,
          isNew
        }
      }
    }
  }
`
