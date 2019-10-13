const { slugify } = require(`./src/util/utilFunctions`)
const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: slugify(node.frontmatter.title),
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const singlePostTemplate = path.resolve("src/templates/singlePost.js")

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach(({node}) => {
      createPage({
         path: node.fields.slug,
         component: singlePostTemplate,
         context: {
            slug: node.fields.slug
         }
      })
    })
  })
}
