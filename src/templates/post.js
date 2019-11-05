import React from 'react'
import { RichText } from 'prismic-reactjs'
import Layout from '../components/Layout'
import * as S from '../styles/base'
import { graphql } from 'gatsby'
import { ArrowLeft2 } from 'styled-icons/icomoon/ArrowLeft2'
import { CalendarAlt } from 'styled-icons/boxicons-regular/CalendarAlt'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'

function BlogPost ({ data }) {
  const { title, img, author, label } = data.prismic.allPosts.edges[0].node

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
          }
        }
      }
    }
  }
`

export default BlogPost
