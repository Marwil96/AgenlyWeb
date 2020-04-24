const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
  {
    prismic {
      allFeaturess(lang: "sv-se") {
        edges {
          node {
            card_title
            card_subtitle
            title
            subtitle
            _meta {
              uid
            }
          }
        }
      }
    }
  }`)
  const template = path.resolve("src/templates/feature.jsx")
  pages.data.prismic.allFeaturess.edges.forEach(edge => {
    createPage({
      path: `/features/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
  }
)}