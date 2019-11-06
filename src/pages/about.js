import React from 'react'
import SEO from '../components/seo'
import { StaticQuery, graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as S from '../styles/base'

const About = () => (
  <StaticQuery
    query={graphql`
      {
        swapi {
          allSpecies(first: 6) {
            name
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title='About' />
        <S.PostTitle>About authors</S.PostTitle>
        <ul>
          {data.swapi.allSpecies.map((user, k) => (
            <li key={k}>{user.name}</li>
          ))}
        </ul>
      </Layout>
    )}
  />
)

export default About
