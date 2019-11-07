/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({ description, lang, meta, title, image }) {
  useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description

  const ogImage =
    image ||
    `https://images.prismic.io/gatsby-prismic-escale/d26b3295-5304-4c14-b9a9-57e5478c08f7_blog-image.png?auto=compress,format`

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${metaDescription}`}
      meta={[
        {
          name: `aplication-name`,
          content: 'Prismic Starter Template'
        },
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:image`,
          content: ogImage
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:image:src`,
          content: ogImage
        },
        {
          name: `twitter:creator`,
          content: 'Prismic Gatsby Author name'
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
  defaultImage:
    `https://images.prismic.io/gatsby-prismic-escale/d26b3295-5304-4c14-b9a9-57e5478c08f7_blog-image.png?auto=compress,format`
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default SEO
