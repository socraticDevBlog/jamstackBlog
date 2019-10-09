import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Nouveau blog de Socratic Dev</h1>
    <StaticQuery query={indexQuery} 
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({node}) => (
              <Post title={node.frontmatter.title}
                author={node.frontmatter.author}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt} />
            ))}
          </div>
        )} 
      }/>
  </Layout>
)

const indexQuery = graphql `
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          author
          date
          path
          title
        }
        id
        excerpt
      }
    }
  }
}
`
export default IndexPage
