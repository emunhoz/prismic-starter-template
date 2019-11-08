import styled from 'styled-components'
import media from 'styled-media-query'
import { Link } from 'gatsby'

export const PostDate = styled.p`
  font-size: 1.6rem;
`

export const TitlePage = styled.div`
  font-size: 1.5rem;
  line-height: 3em;
  margin-bottom: 2em;
`

export const DescriptionPage = styled.div`
  p {
    font-weight: 100;
    margin-bottom: 4.6rem;
    font-size: 24px;
    a {
      color: var(--secondary-color);
      font-weight: 600;
    }
  }
`

export const LatestPosts = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`

export const LinkBack = styled(Link)`
  color: inherit;
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
  background: #1a4763;
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
  color: inherit;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
`

export const Btn = styled.button`
  border-radius: 5px;
  border: 1px solid #333;
  display: inline-block;
  padding: 10px 20px;
  color: #333;
  font-size: 20px;
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

export const Code = styled.code`
  word-break: break-all;
`

export const SearchWrapper = styled.div`
  display: flex;
  input {
    margin-right: 10px;
  }
`

export const MainContent = styled.section`
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    ${media.lessThan('large')`
      padding: 0 1rem;
      word-break: break-word;
    `}
  }
  p {
    font-weight: 100;
    margin-bottom: 4.6rem;
    font-size: 24px;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
  iframe {
    width: 100%;
  }
  blockquote {
    color: var(--postColor);
    border-left: 0.3rem solid var(--highlight);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--borders);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
    ${media.lessThan('large')`
      font-size: 1.875rem;
    `}
  }
  h2 {
    font-size: 2.1rem;
    ${media.lessThan('large')`
      font-size: 1.375rem;
    `}
  }
  h3 {
    font-size: 1.6rem;
    ${media.lessThan('large')`
      font-size: 1.125rem;
    `}
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
    ${media.lessThan('large')`
      padding: 0;
    `}
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--highlight);
    color: var(--highlight);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--postColor);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
