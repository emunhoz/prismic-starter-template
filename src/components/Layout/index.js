import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles'
import Header from '../Header'
import Footer from '../Footer'

import * as S from './styled'

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
