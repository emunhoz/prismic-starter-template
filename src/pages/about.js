import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as S from '../styles/base'

// Query for the Blog Home content in Prismic
export const query = graphql`
  {
    # Field name parameter defines how you can access third party API
    swapi {
      allSpecies(first: 6) {
        name
      }
    }
  }
`

function Blog ({ data }) {
  const users = data.swapi.allSpecies

  return (
    <Layout>
      <SEO title='Blog' />
      <S.PostTitle>About authors</S.PostTitle>
      <ul>
        {users.map((user, k) => (
          <li key={k}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default Blog
