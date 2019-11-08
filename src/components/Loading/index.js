import React from 'react'
import Loadable from 'react-loadable'
import * as S from './styled'

const Loading = () => (
  <S.Wrapper>
    <S.Loading />
  </S.Wrapper>
)

Loadable({
  loader: () => import('./WillFailToLoad'), // oh no!
  loading: Loading
})

export default Loading
