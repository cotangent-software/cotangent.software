import React, { useState } from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import InputText from '../components/InputText';
import Button from '../components/Button';

function Contact({ data }) {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ organization, setOrganization ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ contacted, setContacted ] = useState(false);
  
  const [ errorText, setErrorText ] = useState('');
  
  function handleContactSubmit(e) {
    const myHeaders = new Headers();
    myHeaders.append('pragma', 'no-cache');
    myHeaders.append('cache-control', 'no-cache');
    myHeaders.append('content-type', 'application/json');
    fetch('https://cot.llc/contact', {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      body: JSON.stringify({ name, email, organization, message })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        
        setContacted(true);
      })
      .catch(err => {
        setErrorText('There was an error submitting your message. Please ensure you included all required fields');
      });
  }
  
  const textboxStyle = { width: '100%', maxWidth: '250px' };
  
  return <Layout>
    <SEO title={'Contact'}/>
    <div className={'textContainer'}>
      <h2>Contact</h2>
      <p>
        To contact us, either fill out the form below or send us an email at {data.site.siteMetadata.email}.
        It may take up to 7 business days to receive a reply.
      </p>
      { !contacted &&
        <>
          <h4 style={{ marginBottom: '10px' }}>Contact Form</h4>
          <div role={'form'} style={{ marginBottom: '50px', width: '100%' }}>
            <div style={{ color: 'grey', marginBottom: '5px' }}>* = required</div>
            <InputText style={textboxStyle} gutterBottom required onChange={(e) => setName(e.target.value)} placeholder={'Name'}/>
            <InputText style={textboxStyle} gutterBottom required onChange={(e) => setEmail(e.target.value)} placeholder={'Email'}/>
            <InputText style={textboxStyle} gutterBottom onChange={(e) => setOrganization(e.target.value)} placeholder={'Organization'}/>
            <InputText gutterBottom rows={5} cols={50} style={{ width: '100%' }} required onChange={(e) => setMessage(e.target.value)} placeholder={'Message'}/>
            <span style={{ color: 'red' }}>{ errorText }</span>
            <Button onClick={handleContactSubmit}>Submit</Button>
          </div>
        </>
      }
      { contacted &&
        <h5>Your message has been sent.</h5>
      }
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
