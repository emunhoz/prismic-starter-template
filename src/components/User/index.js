import React from 'react'
import * as S from './styled'

const User = ({ user }) => {
  console.log(user, 'user')
  return (
    <>
      <S.Avatar src={user.avatar_url} alt='avatar' />
      <p>{user.login}</p>
    </>
  )
}

export default User
