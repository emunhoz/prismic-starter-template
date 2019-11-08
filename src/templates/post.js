import React from 'react'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import * as S from '../styles/base'
import { graphql } from 'gatsby'
import { CalendarAlt } from 'styled-icons/boxicons-regular/CalendarAlt'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'
import SEO from '../components/seo'

function BlogPost ({ data }) {
  const {
    title,
    img,
    author,
    label,
    body
  } = data.prismic.allPosts.edges[0].node

  const text = body[0].primary.text

  return (
    <Layout>
      <SEO title={RichText.asText(title)} />
      <S.HeaderInfo>
        <S.Time>{label}</S.Time>
        <span>
          <CalendarAlt /> 12/10/2019
        </span>
        <span>
          <UserCircle /> {author}
        </span>
      </S.HeaderInfo>
      <S.PostTitle>{RichText.asText(title)}</S.PostTitle>
      <img src={img.url} alt={img.alt} width='100%' />
      <S.MainContent>{RichText.render(text)}</S.MainContent>
    </Layout>
  )
}

export const pageQuery = graphql`
  query PostQuery($uid: String) {
    prismic {
      allPosts(uid: $uid) {
        edges {
          node {
            title
            date
            label
            author
            description
            img
            body {
              ... on PRISMIC_PostBodyText {
                primary {
                  text
                }
              }
            }
            _meta {
              uid
            }
          }
        }
      }
    }
  }
`

export default BlogPost
