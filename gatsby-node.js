const path = require(`path`)

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve('src/templates/post.js')

  // Query our blog posts
  const result = await wrapper(
    graphql(`
      {
        prismic {
          allPosts {
            edges {
              node {
                img
                author
                _meta {
                  id
                  uid
                }
              }
            }
          }
        }
      }
    `)
  )

  const posts = result.data.prismic.allPosts.edges

  posts.forEach(edge => {
    createPage({
      path: `/${edge.node._meta.uid}`,
      component: blogTemplate,
      context: {
        uid: edge.node._meta.uid
      }
    })
  })
}
