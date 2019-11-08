import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/Layout'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'

import * as S from '../styles/base'

const User = Loadable({
  loader: () => import('../components/User'),
  loading: Loading
})

const About = () => {
  const [name, setName] = React.useState('escaletech')
  const [hasError, setErrors] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [user, setUser] = React.useState({})

  async function fetchData (name = 'escaletech') {
    try {
      setLoading(true)
      const res = await fetch(`https://api.github.com/users/${name}`)
      res.json().then(res => setUser(res))
      setLoading(false)
    } catch (err) {
      setErrors(err)
      setLoading(false)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <SEO title='About' />
      <S.PostTitle>About authors</S.PostTitle>
      <S.SearchWrapper>
        <input value={name} onChange={e => setName(e.target.value)} />
        <S.Btn onClick={() => fetchData(name)}>Get</S.Btn>
      </S.SearchWrapper>
      <User user={user} />
    </Layout>
  )
}

export default About
