import styled from 'styled-components'
import media from 'styled-media-query'
import { Lightbulb } from 'styled-icons/remix-line/Lightbulb'
import { Link } from 'gatsby'

export const Header = styled.header`
  display: flex;
  grid-area: header;
  align-items: center;
  justify-content: space-between;
  padding: 3em;
  ${media.lessThan('medium')`
    padding: 3em 1em;
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
  position: relative;
  &:last-child {
    margin: 0;
  }
  a {
    color: inherit;
    &:after {
      content: '';
      display: block;
      margin: auto;
      height: 5px;
      width: 0px;
      background: transparent;
      transition: width 0.2s ease, background-color 0.2s ease;
    }
    &:hover:after {
      width: 100%;
      background: var(--secondary-color);
    }
    font-weight: 600;
    text-decoration: none;
    font-size: 18px;
    &.current {
      border-bottom: 5px solid var(--secondary-color);
      padding-bottom: 11px;
    }
  }
`

export const Light = styled(Lightbulb)`
  width: 44px;
`
