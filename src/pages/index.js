import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Post from "../components/post"
import PageLinks from "../components/page-links"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  // todo: federate this value (have only one). it is also configured in 'gatsby-node.js'.
  const postsPerPage = 20

  let numberOfPages
  return (
    <Layout pageTitle="">
      <Helmet>
        <meta
          name="description"
          content="Blogue philosophique et technologique par Maxime Bonin, un développeur québécois. Pour une carrière enrichissante. Le contenu est catégorisé selon différents mot-clés comme Croissance, Productivité, Programmation, Technologie, etc."
        />
      </Helmet>
      <Seo
        title="Accueil"
        keywords={[
          "Maxime Bonin",
          "développeur",
          "analyste-programmeur",
          "software engineering",
          "blogue techno",
          "socraticdev",
          "dailyprog",
        ]}
      />
      <StaticQuery
        query={indexQuery}
        render={(data) => {
          numberOfPages = Math.max(
            1,
            Math.ceil(data.allMarkdownRemark.totalCount / postsPerPage)
          )
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
                  fluid={node.frontmatter.image.childImageSharp.gatsbyImageData}
                  tags={node.frontmatter.tags}
                />
              ))}
              <PageLinks currentPage={1} numberOfPages={numberOfPages} />
            </div>
          )
        }}
      />
    </Layout>
  )
}

const indexQuery = graphql`
  query MyQuery {
    allMarkdownRemark(
      filter: { frontmatter: { is_archived: { eq: false } } }
      sort: { frontmatter: { date: DESC } }
      limit: 10
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            author
            date(formatString: "dddd Do MMMM YYYY", locale: "fr")
            title
            tags
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1000
                  height: 300
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP]
                )
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
