import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'

const Blog = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <Layout>
        <SEO title='Blog' description='Latest posts from blog' />
        <BlogPosts posts={data.prismic.allPosts.edges} />
      </Layout>
    )}
  />
)

export default Blog
