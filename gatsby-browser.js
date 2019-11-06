import React from 'react'
import Transition from './src/components/Transition'
import 'lazysizes'

const { registerLinkResolver } = require('gatsby-source-prismic-graphql')
const { linkResolver } = require('./src/utils/linkResolver')

registerLinkResolver(linkResolver)

export const wrapPageElement = ({ element, props }) => {
  return <Transition {...props}>{element}</Transition>
}
