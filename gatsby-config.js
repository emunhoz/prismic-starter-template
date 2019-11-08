require('dotenv').config()

const pluginConfig = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-prismic-graphql`,
    options: {
      repositoryName: 'gatsby-prismic-escale',
      linkResolver: () => post => `/${post.uid}`
    }
  },
  {
    // keep as first gatsby-source-filesystem plugin for gatsby image support
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/src/images`,
      name: 'images'
    }
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 960,
            linkImagesToOriginal: false
          }
        },
        `gatsby-remark-prismjs`
      ]
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
      name: `Prismic Boilerplate Gatsby`,
      short_name: `PBG`,
      start_url: `/`,
      background_color: `#1C2938`,
      theme_color: `#1C2938`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`
    }
  },
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-netlify`,
  {
    resolve: 'gatsby-plugin-netlify-cache',
    options: {
      cachePublic: true
    }
  },
  `gatsby-plugin-offline`,
  `gatsby-plugin-sitemap`
]

console.log(process.env.NODE_ENV, 'asdasdasd')

if (process.env && process.env.NODE_ENV !== 'development') {
  const analytics = {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: 'UA-151720477-1',
      head: true
    }
  }

  pluginConfig.push(analytics)
}

module.exports = {
  siteMetadata: {
    title: `Prismic Start Template`,
    description: `A template made with Gatsby and Prismic 🚀`,
    author: `Prismic Start Template`,
    siteUrl: `https://gatsby-prismic-example.netlify.com/`
  },
  plugins: pluginConfig
}
