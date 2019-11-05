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
  const [response, setResponse] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')

  const getPeople = async num => {
    const endpoint = `https://swapi.co/api/people/${num}`

    try {
      setResponse([])
      setLoading(true)
      const resp = await fetch(endpoint).then(response => response.json())
      setLoading(false)
      setResponse(resp)
      setError('')
    } catch (err) {
      setError(err.message)
      setResponse([])
      setLoading(false)
    }
  }

  const handleChange = val => {
    getPeople(val)
  }

  return (
    <Layout>
      <SEO title='Blog' />
      <S.PostTitle>About authors</S.PostTitle>
      <ul>
        {users.map((user, k) => (
          <li key={k}>{user.name}</li>
        ))}
      </ul>
      <S.TitlePage>Get dynamic data from another REST api</S.TitlePage>
      {error && <S.Alert>{error}</S.Alert>}
      <input
        placeholder='Type a number between 1 until 100'
        onChange={e => handleChange(e.target.value)}
      />
      <ul>
        <li>
          Name: {loading ? 'loading...' : null} {response.name}
        </li>
        <li>
          Gender: {loading ? 'loading...' : null} {response.gender}
        </li>
        <li>
          Height: {loading ? 'loading...' : null} {response.height}
        </li>
      </ul>
    </Layout>
  )
}

export default Blog
