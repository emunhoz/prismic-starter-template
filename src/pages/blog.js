import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    prismic {
      allPosts(sortBy: date_DESC) {
        edges {
          node {
            _meta {
              id
              uid
              type
            }
            title
            date
            author
            label
            description
            img
            body {
              ... on PRISMIC_PostBodyText {
                type
                label
                primary {
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const posts = data.prismic.allPosts.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Blog
