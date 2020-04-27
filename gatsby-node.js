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
       allLegals(lang: "sv-se") {
        edges {
        node {
          content
          title
          _meta {
            uid
          }
        }
      }
      }
    }
  }`)
  const template = path.resolve("src/templates/feature.jsx")
  const legalTemplate = path.resolve("src/templates/legal.jsx")

  pages.data.prismic.allLegals.edges.forEach(edge => {
    createPage({
      path: `/legal/${edge.node._meta.uid}`,
      component: legalTemplate,
      context: {
        uid: edge.node._meta.uid,
        title: edge.node.title[0].text,
        content: edge.node.content
      },
    })
  }
  )

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

