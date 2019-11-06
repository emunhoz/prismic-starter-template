import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

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
          }
        }
      }
    }
  }
`

function Blog ({ data }) {
  const posts = data.prismic.allPosts.edges

  return (
    <Layout>
      <SEO title='Blog' />
      <BlogPosts posts={posts} />
    </Layout>
  )
}

export default Blog
