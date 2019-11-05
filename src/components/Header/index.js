import React from 'react'
import { Link } from 'gatsby'

import * as S from './styled'

const Header = () => {
  return (
    <S.Header>
      <S.Logo to='/' />
      <S.Menu>
        <S.Nav>
          <S.NavLink>
            <Link to='/blog'>Blog</Link>
          </S.NavLink>
          <S.NavLink>
            <Link to='/about'>About</Link>
          </S.NavLink>
        </S.Nav>
      </S.Menu>
    </S.Header>
  )
}

export default Header
