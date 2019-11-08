import React from 'react'
import * as S from './styled'

const User = ({ user }) => (
  <>
    <S.Avatar src={user.avatar_url} alt='avatar' />
    <p>{user.login}</p>
  </>
)

export default User
