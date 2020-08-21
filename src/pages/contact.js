import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

function Contact({ data }) {
  console.log(data);
  return <Layout>
    <SEO title={'Contact'}/>
    <div className={'textContainer'}>
      <h2>Contact</h2>
      <p>
        To contact us, send us an email at {data.site.siteMetadata.email}.
        It may take up to 7 business days to receive a reply.
      </p>
      {/*<h4>Contact Form</h4>*/}
      {/*<form>*/}
      
      {/*</form>*/}
    </div>
  </Layout>
}

export default Contact;

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        email
      }
    }
  }
`;
