module.exports = {
  siteMetadata: {
    title: `Cotangent Software`,
    description: `Software solutions for a digital age`,
    author: `Connor Burns`,
    products: [
      {
        title: 'Dataflow',
        description: 'A modular graph-based approach to software development, with a specialty for backend web development',
        url: 'https://github.com/cotangent-software/dataflow-core',
        logo: 'https://raw.githubusercontent.com/cotangent-software/dataflow-core/master/logo.png',
        isNew: true
      },
      {
        title: 'Prism.academy',
        description: 'An AI-driven approach for creating personalized learning plans surrounding virtually any subject or area of interest.',
        url: 'http://prismacademy.xyz'
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
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
