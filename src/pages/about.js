import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import * as S from '../styles/base'

const About = () => {
  const [name, setName] = React.useState('')
  const [hasError, setErrors] = React.useState(false)
  const [user, setUser] = React.useState({})

  async function fetchData (name = 'emunhoz') {
    const res = await fetch(`https://api.github.com/users/${name}`)
    res
      .json()
      .then(res => setUser(res))
      .catch(err => setErrors(err))
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <SEO title='About' />
      <S.PostTitle>About authors</S.PostTitle>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => fetchData(name)}>Get user</button>
      <S.Code>{JSON.stringify(user)}</S.Code>
      <hr />
      <p>{user.login}</p>
      <img src={user.avatar_url} alt='avatar' />
      <span>Has error: {JSON.stringify(hasError)}</span>
      <p>Lorem ipsum dolor sit</p>
    </Layout>
  )
}

export default About
