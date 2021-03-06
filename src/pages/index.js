import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../scss/main.scss"
import TextSection from "../components/textSection"
import Introduction from "../components/introduction"
import ProcessSection from "../components/processSection"
import TenReasons from "../components/tenReasons"
import ExampleSites from "../components/exampleSites"
import SubscribePanel from "../components/subscribePanel"
import VideoOverlay from "../components/videoOverlay"
import VideoThumb from "../components/videoThumb"
import thumbnail from '../images/AgenlyPromoThumb.gif'

const IndexPage = ({ data }) => {
  const [videoActive, setVideoActive ] = useState(false);
  const [windowEnglish, setWindowEnglish] = useState(false)
  const IndexData = data.prismic.allHomepages.edges[0].node

  useEffect(() => {
    setWindowEnglish(window.location.pathname.startsWith("/en"))
  }, [])

  return (
    <Layout>
      <SEO
        title={IndexData.seo_title}
        description={IndexData.seo_description}
        author="William Martinsson"
      />

      <Introduction
        title={IndexData.homepage_title}
        subtitle={IndexData.homepage_subtitle}
        image={IndexData.homepage_imageSharp.childImageSharp.fluid}
      />
      {windowEnglish ? null : <VideoThumb gif={thumbnail} clickHandler={() => setVideoActive(true) }/>}
      {videoActive ? (
        <VideoOverlay
          src="https://player.vimeo.com/video/449309925?autoplay=1"
          title="Agenly"
          clickHandler={() => setVideoActive(false)}
        />
      ) : null}
      {IndexData.body.map(component => {
        if (component.type === "feature_panel")
          return (
            <TextSection
              text={component.primary.panel_text}
              img={component.primary.panel_image.url}
              modifier={component.primary.panel_position ? "right" : "left"}
            />
          )

        if (component.type === "reasons_panel")
          return (
            <TenReasons
              title={component.primary.title}
              reasons={component.fields}
            />
          )
        if (component.type === "foldout_panel")
          return (
            <ProcessSection
              title={component.primary.title}
              fields={component.fields}
            />
          )
        return null
      })}
      <ExampleSites />
      <SubscribePanel />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allHomepages(lang: "sv-se") {
        edges {
          node {
            seo_title
            seo_description
            homepage_subtitle
            homepage_title
            homepage_image
            homepage_imageSharp {
              childImageSharp {
                fluid {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
            body {
              ... on PRISMIC_HomepageBodyFeature_panel {
                type
                label
                primary {
                  panel_image
                  panel_position
                  panel_text
                }
              }
              ... on PRISMIC_HomepageBodyReasons_panel {
                type
                label
                fields {
                  block_text
                  block_title
                }
                primary {
                  title
                }
              }
              ... on PRISMIC_HomepageBodyFoldout_panel {
                type
                label
                fields {
                  foldout_text
                  foldout_title
                }
                primary {
                  image
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
