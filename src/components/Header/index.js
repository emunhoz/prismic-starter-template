import React from 'react'
import { Link } from 'gatsby'
import * as S from './styled'

const Header = () => {
  const [theme, setTheme] = React.useState(null)

  const isDarkMode = theme === 'dark'

  React.useEffect(() => {
    setTheme(window.__theme)
    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.Header>
      <S.Logo to='/' aria-label='Home' />
      <S.Menu>
        <S.Nav>
          <S.NavLink>
            <Link to='/blog' activeClassName='current'>
              Blog
            </Link>
          </S.NavLink>
          <S.NavLink>
            <Link to='/about' activeClassName='current'>
              About
            </Link>
          </S.NavLink>
          <S.NavLink>
            <S.Light
              onClick={() => {
                window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
              }}
            />
          </S.NavLink>
        </S.Nav>
      </S.Menu>
    </S.Header>
  )
}

export default Header
