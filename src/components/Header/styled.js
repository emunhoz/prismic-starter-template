import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const Header = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  padding: 3em;
  ${media.lessThan('medium')`
    padding: 1em;
  `}
`

export const Logo = styled(Link)`
  width: 100px;
  height: 20px;
  display: inline-block;
  background: var(--primary-color);
`

export const Menu = styled.nav`
  display: flex;
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;
`

export const NavLink = styled.li`
  margin: 0 20px;
  a {
    color: #333;
    font-weight: 600;
    text-decoration: none;
    font-size: 18px;
    &:hover,
    &.current {
      border-bottom: 5px solid var(--primary-color);
      padding-bottom: 20px;
    }
  }
`
