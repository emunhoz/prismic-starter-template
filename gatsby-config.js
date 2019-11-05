const { apiEndpoint } = require('./prismic-config')
var repo = /([^\/]+)\.prismic\.io\/graphql/.exec(apiEndpoint)

module.exports = {
  siteMetadata: {
    title: `Prismic Start Template`,
    description: `A template made with Gatsby and Prismic 🚀`,
    author: `Prismic Start Template`,
    siteUrl: `https://gatsby-prismic-example.netlify.com/`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: repo[1], // Loads the repo name from prismic configuration
        linkResolver: () => post => `/${post.uid}`
      }
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain the remote schema Query type
        typeName: 'SWAPI',
        // This is the field under which it's accessible
        fieldName: 'swapi',
        // URL to query from
        url: 'https://api.graphcms.com/simple/v1/swapi'
      }
    },
    {
      resolve: `gatsby-transformer-prismic`,
      options: {
        plugins: [`gatsby-prismic-lazy-load`]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `400`, `600`, `700`]
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Prismic Escale Template`,
        short_name: `@escaledigital`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ]
}
