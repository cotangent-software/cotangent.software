import Layout from '../components/layout';
import React from 'react';
import styles from '../styles/index.module.css';
import ProductSquare from '../components/ProductSquare';
import { graphql } from 'gatsby';

function Products({ data }) {
  const products = data.site.siteMetadata.products;
  return (
    <Layout>
      <div className={styles.productsContainer} id={'products'} style={{ paddingTop: 0 }}>
        <h2 style={{ marginLeft: '15px' }}>Products</h2>
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
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ProductsPageQuery {
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
`;
export default Products;
