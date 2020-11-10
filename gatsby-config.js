module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: `Cotangent Software`,
    description: `Software solutions for a digital age`,
    author: `Connor Burns`,
    email: 'support@cot.llc',
    githubLink: 'https://github.com/cotangent-software',
    twitterLink: 'https://twitter.com/CotangentLLC',
    products: [
      {
        title: 'Dataflow',
        description: 'A modular graph-based approach to software development, with a specialty for backend web development',
        url: 'https://github.com/cotangent-software/dataflow-core',
        logo: 'https://raw.githubusercontent.com/cotangent-software/assets/master/dataflow-logo.png',
        isNew: true
      },
      {
        title: 'Prism.academy',
        description: 'An AI-driven approach for creating personalized learning plans surrounding virtually any subject or area of interest.',
        url: 'http://prismcourses.com',
        logo: 'https://raw.githubusercontent.com/cotangent-software/assets/master/prism-academy-logo.png'
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff9900`,
        display: `minimal-ui`,
        icon: `src/images/logo-thick-light.png`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180051468-2',
        head: false,
        defer: false,
        cookieDomain: 'cotangent.software'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
