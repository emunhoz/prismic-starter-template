import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyles from '../../styles'

import * as S from './styled'
import Loadable from 'react-loadable'
import Loading from '../Loading'
import Header from '../Header'

const Footer = Loadable({
  loader: () => import('../Footer'),
  loading: Loading
})

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <Header />
    <S.Main>{children}</S.Main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
