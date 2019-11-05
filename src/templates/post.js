import React from 'react'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import * as S from '../styles/base'
import { graphql } from 'gatsby'
import { ArrowLeft2 } from 'styled-icons/icomoon/ArrowLeft2'
import { CalendarAlt } from 'styled-icons/boxicons-regular/CalendarAlt'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'

import Text from '../components/Slices/Text'

function BlogPost ({ data }) {
  const {
    title,
    img,
    author,
    label,
    body
  } = data.prismic.allPosts.edges[0].node

  console.log(body[0].primary.text, 'body')
  const text = body[0].primary.text

  return (
    <Layout>
      <S.LinkBack to='/'>
        <ArrowLeft2 />
      </S.LinkBack>
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
      {text.map((item, k) => (
        <div key={k}>{RichText.render(item)}</div>
      ))}
      <Text />
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
            _meta {
              uid
            }
            body {
              ... on PRISMIC_PostBodyText {
                type
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

export default BlogPost
