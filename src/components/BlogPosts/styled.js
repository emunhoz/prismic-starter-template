import styled from 'styled-components'
import media from 'styled-media-query'

export const PostSummary = styled.div`
  display: flex;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 16px;
  transition: all 0.2s ease-in;
  &:hover {
    box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.1);
  }

  ${media.lessThan('medium')`
    display: flex;
    flex-flow: column;
  `}
`

export const Image = styled.img`
  margin-right: 16px;
  width: 302px;
  height: 187px;

  ${media.lessThan('medium')`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  `}
`

export const Title = styled.h2`
  font-weight: 600;
  line-height: 30px;
  margin-bottom: 17px;
  a {
    color: #333;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Description = styled.div`
  font-weight: 100;
  font-size: 18px;
  line-height: 30px;
`

export const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`

export const HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  svg {
    width: 16px;
    margin-right: 5px;
  }
`

export const Label = styled.div`
  border-radius: 5px;
  background: #333;
  display: inline-block;
  padding: 2px 10px;
  width: fit-content;
  color: #fff;
`

export const Time = styled.time`
  display: flex;
  align-items: center;
  font-weight: 100;
`

export const Author = styled.span`
  display: flex;
  align-items: center;
`
