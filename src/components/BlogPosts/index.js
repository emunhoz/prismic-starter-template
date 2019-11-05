import React from 'react'
import { Link } from 'gatsby'
import { RichText, Date } from 'prismic-reactjs'
import { linkResolver } from '../../utils/linkResolver'
import { CalendarAlt } from 'styled-icons/boxicons-regular/CalendarAlt'
import { UserCircle } from 'styled-icons/boxicons-solid/UserCircle'

import * as S from './styled'

const BlogPosts = ({ posts }) => (
  <>
    {posts.map(post => {
      return <PostSummary post={post.node} key={post.node._meta.id} />
    })}
  </>
)

export default BlogPosts

const PostSummary = ({ post }) => {
  let postDate = Date(post.date)
  postDate = postDate
    ? new Intl.DateTimeFormat('pt-BR', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    }).format(postDate)
    : ''

  return (
    <S.PostSummary key={post.id}>
      {post.img && (
        <S.Image src={post.img.url} loading='lazy' alt={post.img.alt} />
      )}
      <S.Info>
        <S.HeaderInfo>
          <S.Label>{post.label}</S.Label>
          <S.Time>
            <CalendarAlt /> {postDate}
          </S.Time>
          <S.Author>
            <UserCircle /> {post.author}
          </S.Author>
        </S.HeaderInfo>
        <S.Title>
          <Link to={linkResolver(post._meta)}>
            {RichText.asText(post.title)}
          </Link>
        </S.Title>
        <S.Description>{RichText.render(post.description)}</S.Description>
      </S.Info>
    </S.PostSummary>
  )
}
