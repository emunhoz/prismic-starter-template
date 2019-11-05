import styled from 'styled-components'
import { Link } from 'gatsby'

export const PostDate = styled.p`
  font-size: 1.6rem;
`

export const TitlePage = styled.div`
  font-size: 1.5rem;
  line-height: 3em;
  margin-bottom: 20px;
`

export const DescriptionPage = styled.div`
  * {
    font-weight: 100;
    margin-bottom: 4.6rem;
    font-size: 24px;
  }
`

export const LatestPosts = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`

export const LinkBack = styled(Link)`
  color: #333;
  display: block;
  margin-bottom: 40px;
  &:hover {
    opacity: 0.8;
  }
  svg {
    width: 52px;
  }
`

export const PostTitle = styled.h1`
  font-size: 3rem;
  line-height: 5rem;
`

export const HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  svg {
    width: 16px;
  }
`

export const Time = styled.time`
  border-radius: 5px;
  background: #27bde8;
  display: inline-block;
  padding: 2px 10px;
  width: fit-content;
  color: #fff;
`

export const BtnLink = styled(Link)`
  border-radius: 5px;
  border: 1px solid #333;
  display: inline-block;
  padding: 10px 20px;
  color: #333;
  font-size: 20px;
  -webkit-text-decoration: none;
  -webkit-text-decoration: none;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`

export const Alert = styled.div`
  border-radius: 5px;
  display: flex;
  font-weight: 100;
  padding: 20px;
  color: #fff;
  font-size: 24px;
  background: #fe5454;
  margin-bottom: 40px;
`
