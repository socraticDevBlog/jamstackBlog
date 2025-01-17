const { slugify, tagsSorted } = require(`./src/util/util-functions.js`)
const _ = require("lodash")
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
  const { createPage } = actions

  const templates = {
    singlePost: path.resolve("src/templates/single-post.js"),
    tagsPage: path.resolve("src/templates/tags-page.js"),
    tagPosts: path.resolve("src/templates/tag-posts.js"),
    postsList: path.resolve("src/templates/posts-list.js"),
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
  `).then((res) => {
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
    _.each(posts, (edge) => {
      // si un post n'a pas de tag, alors on ne fait rien
      //
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })

    // créer un dictionnaire : {tag:count, tag2:count}
    //
    let tagPostCounts = {}
    tags.forEach((tag) => {
      tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1
    })

    // présenter les sujets les plus discutés en premier
    //
    tags = tagsSorted(tagPostCounts)

    // creating tags page
    //
    createPage({
      path: "/tags",
      component: templates.tagsPage,
      context: {
        tags,
        tagPostCounts,
      },
    })

    // creating tag posts page
    //
    tags.forEach((tag) => {
      createPage({
        path: `/tag/${slugify(tag)}`,
        component: templates.tagPosts,
        context: {
          tag,
        },
      })
    })

    // todo: federate this value (have only one). it is also configured in 'index.js'.
    const postsPerPage = 20

    const pagesCount = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: pagesCount }).forEach((_, index) => {
      const isFirstPage = index === 0
      const currentPage = index + 1

      if (isFirstPage) return

      createPage({
        path: `/page/${currentPage}`,
        component: templates.postsList,
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          currentPage,
          pagesCount,
        },
      })
    })
  })
}
