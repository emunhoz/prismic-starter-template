import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as S from '../styles/base'

export const query = graphql`
  {
    swapi {
      allSpecies(first: 6) {
        name
      }
    }
  }
`

function About ({ data }) {
  const users = data.swapi.allSpecies

  return (
    <Layout>
      <SEO title='About' />
      <S.PostTitle>About authors</S.PostTitle>
      <ul>
        {users.map((user, k) => (
          <li key={k}>{user.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export default About
