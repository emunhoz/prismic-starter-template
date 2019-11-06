import React from 'react'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'
import * as S from '../styles/base'

const Blog = () => (
  <StaticQuery
    query={graphql`
      {
        prismic {
          allBlog_homes(uid: null) {
            edges {
              node {
                _meta {
                  id
                  type
                }
                headline
                description
              }
            }
          }
          allPosts(sortBy: date_DESC, first: 2) {
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
        <SEO title='Home' />
        <S.TitlePage>
          {RichText.render(data.prismic.allBlog_homes.edges[0].node.headline)}
        </S.TitlePage>
        <S.DescriptionPage>
          {RichText.render(
            data.prismic.allBlog_homes.edges[0].node.description
          )}
        </S.DescriptionPage>
        <S.LatestPosts>Latest posts</S.LatestPosts>
        <BlogPosts posts={data.prismic.allPosts.edges} />
        <S.BtnLink to='/blog'>See all posts</S.BtnLink>
      </Layout>
    )}
  />
)

export default Blog
