import React from 'react'
import SEO from '../components/seo'
import { RichText } from 'prismic-reactjs'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BlogPosts from '../components/BlogPosts'
import * as S from '../styles/base'

// Query for the Blog Home content in Prismic
export const query = graphql`
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
`

const Index = ({ data }) => {
  const posts = data.prismic.allPosts.edges
  const home = data.prismic.allBlog_homes.edges[0].node

  return (
    <Layout>
      <SEO title='Home' />
      <S.TitlePage>{RichText.render(home.headline)}</S.TitlePage>
      <S.DescriptionPage>{RichText.render(home.description)}</S.DescriptionPage>
      <S.LatestPosts>Latest posts</S.LatestPosts>
      <BlogPosts posts={posts} />
      <S.BtnLink to='/blog'>See all posts</S.BtnLink>
    </Layout>
  )
}

export default Index
