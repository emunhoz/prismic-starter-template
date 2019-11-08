import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles'
import Header from '../Header'

import * as S from './styled'
import Loadable from 'react-loadable'
import Loading from '../Loading'

const Footer = Loadable({
  loader: () => import('../Footer'),
  loading: Loading
})

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
