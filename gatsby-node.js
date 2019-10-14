const { slugify } = require(`./src/util/utilFunctions`)
const _ = require("lodash")
const path = require('path')

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
  const { createPage } = actions

  const templates = {
      singlePost: path.resolve('src/templates/singlePost.js'),
      tagsPage: path.resolve('src/templates/tags-page.js')
  }

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              author
              tags
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

    // creating single-post pages
    //
    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.singlePost,
        context: {
          slug: node.fields.slug,
        },
      })
    })

    let tags = []
    _.each(posts, edge => {
      // si un post n'a pas de tag, alors on ne fait rien
      //
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // créer un dictionnaire : {tag:count, tag2:count}
    //
    let tagPostCounts = {}
    tags.forEach(tag => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    tags = _.uniq(tags);

    // creating tags page
    //
    createPage({
       path: '/tags',
       component: templates.tagsPage,
       context: {
          tags,
          tagPostCounts
       }
    })
  })
}
