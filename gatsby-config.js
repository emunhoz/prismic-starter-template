const pluginConfig = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      path: `${__dirname}/src/images`,
      name: `images`
    }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  {
    resolve: `gatsby-source-prismic-graphql`,
    options: {
      repositoryName: 'gatsby-prismic-escale'
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
  `gatsby-plugin-styled-components`,
  {
    resolve: 'gatsby-plugin-netlify-cache',
    options: {
      cachePublic: true
    }
  },
  `gatsby-plugin-sitemap`,
  'gatsby-plugin-offline',
  'gatsby-plugin-netlify'
]

module.exports = {
  siteMetadata: {
    title: `Prismic Start Template`,
    description: `A template made with Gatsby and Prismic 🚀`,
    author: `Prismic Start Template`,
    siteUrl: `https://gatsby-prismic-example.netlify.com/`
  },
  plugins: pluginConfig
}
