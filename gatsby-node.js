const path = require(`path`)

exports.createPages = async ({ reporter, actions, graphql }) => {
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

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const posts = result.data.prismic.allPosts.edges
  const blogTemplate = path.resolve('src/templates/post.js')

  posts.forEach(edge => {
    // Create a page for each blog post
    createPage({
      path: `/${edge.node._meta.uid}`,
      component: blogTemplate,
      context: {
        uid: edge.node._meta.uid
      }
    })
  })
}
