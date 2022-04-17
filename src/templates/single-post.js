import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"
import { Card, CardSubtitle, CardBody, Badge } from "reactstrap"
import Img from "gatsby-image"
import { slugify } from "../util/util-functions"
import { Helmet } from "react-helmet"

const rootUrl = `{rootUrlImg}/`
const rootUrlImg = "https://socratic.dev"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  return (
    <Layout pageTitle={post.title}>
      <Seo title={post.title} />

      <Helmet>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={`${post.title}`} />
        <meta
          property="og:description"
          content={`${data.markdownRemark.excerpt}`}
        />
        <meta
          property="og:image"
          content={`${rootUrlImg}${post.image.childImageSharp.fluid.src}/`}
        />
        <meta
          property="og:url"
          content={`${rootUrl}${data.markdownRemark.fields.slug}/`}
        />
        <meta
          property="twitter:image"
          content={`${rootUrlImg}${post.image.childImageSharp.fluid.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content={`${data.markdownRemark.excerpt}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="fr_CA" />
        <link
          rel="canonical"
          href={`${rootUrl}${data.markdownRemark.fields.slug}/`}
        />
      </Helmet>

      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <p>
            <span className="text-info">{post.date}</span> par{" "}
            <span className="text-info">{post.author}</span>
          </p>
          <CardSubtitle>
            <div
              className="card-post-text"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
            <ul className="post-tags">
              {post.tags.map((tag) => (
                <li key={tag}>
                  <Link to={`/tag/${slugify(tag)}`}>
                    <Badge pill color="primary">
                      {tag}
                    </Badge>
                  </Link>
                </li>
              ))}
            </ul>
          </CardSubtitle>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const postQuery = graphql`
  query bloPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
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
              src
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default SinglePost
