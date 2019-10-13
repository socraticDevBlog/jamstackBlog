import React from "react"
import Layout from "../components/layout"
import Sidebar from "../components/Sidebar"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Row, Col, Card, CardSubtitle, CardBody, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/utilFunctions"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={post.title} />
      <h1>{post.title}</h1>
      <Row>
        <Col md-8></Col>
        <Card>
          <Img
            className="card-image-top"
            fluid={post.image.childImageSharp.fluid}
          />
          <CardBody>
            <span className="text-info">{post.date}</span> par
            <span className="text-info">{post.author}</span>
            <CardSubtitle>
              <div
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
              <ul className="post-tags">
                {post.tags.map(tag => (
                  <li key={tag}>
                    <Link to={`/tag/${slugify(tag)}`}>
                      <Badge color="primary">{tag}</Badge>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardSubtitle>
          </CardBody>
        </Card>
        <Col md-4>
          <Sidebar></Sidebar>
        </Col>
      </Row>
    </Layout>
  )
}

export const postQuery = graphql`
  query bloPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
         slug
      }
      frontmatter {
        title
        author
        date(formatString: "dddd Do MMMM YYYY", locale: "fr")
        tags
        image {
          childImageSharp {
            fluid(maxHeight: 200, maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default SinglePost
