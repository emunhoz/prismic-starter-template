import styled from 'styled-components'
import media from 'styled-media-query'

export const Main = styled.main`
  grid-area: main;
  max-width: 792px;
  width: 100%;
  margin: 0 auto;
  padding: 3em;
  ${media.lessThan('medium')`
    padding: 1em;
  `}
`
