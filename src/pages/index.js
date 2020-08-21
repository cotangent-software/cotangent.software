import React, { useEffect, useRef, useState } from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../styles/index.module.css'
import IndexActionButton from '../components/IndexActionButton';

function IndexPage() {
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
    window.onresize = function() {
      leftCanvas.current.width = 0;
      rightCanvas.current.width = 0;
      leftCanvas.current.height = 0;
      rightCanvas.current.height = 0;
      setUpdate(update + 1);
    }
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
            c.fillRect(x * rectSize, y * rectSize, rectSize, rectSize);
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
  });
  return (
    <Layout>
      <SEO title="Home"/>
      <div ref={mainBar} className={styles.mainBar}>
        <div ref={leftCanvasContainer} style={{ flexGrow: 10 }}>
          <canvas ref={leftCanvas} width={'0'}> </canvas>
        </div>
        <div ref={centerContainer} style={{ flexGrow: 1, height: '400px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1 style={{ marginBottom: '15px' }}>Software for the future</h1>
          <IndexActionButton>See our products > </IndexActionButton>
        </div>
        <div ref={rightCanvasContainer} style={{ flexGrow: 10 }}>
          <canvas ref={rightCanvas} width={'0'}> </canvas>
        </div>
        
      </div>
    </Layout>
  );
}

export default IndexPage
