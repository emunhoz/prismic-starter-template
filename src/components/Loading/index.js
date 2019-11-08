import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <div>Loading...</div>

Loadable({
  loader: () => import('./WillFailToLoad'), // oh no!
  loading: Loading
})

export default Loading
