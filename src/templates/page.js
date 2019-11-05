import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

const Page = props => {
  return (
    <>
      <h1>aasd</h1>
      {/* <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <TitlePage text={post.frontmatter.title} />
      <S.Content>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </S.Content> */}
    </>
  )
}

// export const query = graphql`
//   query Page($locale: String!, $title: String!) {
//     markdownRemark(
//       frontmatter: { title: { eq: $title } }
//       fields: { locale: { eq: $locale } }
//     ) {
//       frontmatter {
//         title
//         description
//         image
//       }
//       html
//     }
//   }
// `

export default Page
