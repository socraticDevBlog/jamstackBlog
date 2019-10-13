import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"
import Sidebar from "../components/Sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Maxime Bonin blog " />
    <h1>Accueil</h1>

    <Row>
      <Col md="9">
        <StaticQuery
          query={indexQuery}
          render={data => {
            return (
              <div>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <Post
                    key={node.id}
                    title={node.frontmatter.title}
                    author={node.frontmatter.author}
                    slug={node.fields.slug}
                    date={node.frontmatter.date}
                    body={node.excerpt}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    tags={node.frontmatter.tags}
                  />
                ))}
              </div>
            )
          }}
        />
      </Col>
      <Col md="3">
        <Sidebar />
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            author
            date(formatString: "dddd Do MMMM YYYY", locale: "fr")
            title
            tags
            image {
              childImageSharp {
                fluid(maxHeight: 200, maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          id
          excerpt
        }
      }
    }
  }
`
export default IndexPage
