const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Query our blog posts
  const result = await graphql(`
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

  const posts = result.data.prismic.allPosts.edges
  const blogTemplate = path.resolve('src/templates/post.js')

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
