const path = require("path")
const cities = require("./src/utils/json/kommuner.json")
var fs = require("fs")
var dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir)
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
  {
    prismic {
      allFeaturess {
        edges {
          node {
            card_title
            card_subtitle
            title
            subtitle
            _meta {
              uid
              lang
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
  const template_feature_english = path.resolve("src/templates/feature.en.jsx")
  const cityTemplate = path.resolve("src/templates/city.jsx")
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

  cities.forEach(city => {
    createPage({
      path: `/stad/${city.toLowerCase()}`,
      component: cityTemplate,
      context: {
        city: city,
      },
    })
  })

  cities.forEach(city => {
    createPage({
      path: `en/stad/${city.toLowerCase()}`,
      component: cityTemplate,
      context: {
        city: city,
      },
    })
  })

  pages.data.prismic.allFeaturess.edges.forEach(edge => {
    if(edge.node._meta.lang === 'sv-se') {
    createPage({
      path: `/features/${edge.node._meta.uid}`,
      component: template,
      context: {
        uid: edge.node._meta.uid,
      },
    })
    } else {
      createPage({
      path: `/en/features/${edge.node._meta.uid}`,
      component: template_feature_english,
      context: {
        uid: edge.node._meta.uid,
      },
    })
    }
  }
)}

