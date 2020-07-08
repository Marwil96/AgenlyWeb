import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import SubscribePanel from "../components/subscribePanel"
import ModulesLibrary from "../components/modulesLibrary"
import TitleBlock from "../components/titleblock"
import MockupBlock from "../components/mockupBlock"
import RedirectBlock from "../components/redirectBlock"
import ImageBlock from "../components/ImageBlock"

const Feature = ({ data }) => {
  const featureData = data.prismic.allFeaturess.edges[0].node
  const [componentArray, setComponentArray] = useState([])
  useEffect(() => {
    setComponentArray(featureData.body)
  }, [featureData.body])

  return (
    <Layout english="en">
      <SEO
        title={featureData.seo_title}
        description={featureData.seo_description}
        author="William Martinsson"
      />
      <PageHeader
        title={featureData.title[0].text}
        text={<RichText render={featureData.subtitle} />}
      />
      <section className="FeatureTemplate">
        {componentArray.map(component => (
          <div>
            {component.type === "module_cards" ? (
              <ModulesLibrary cards={component.fields} />
            ) : null}
            {component.type === "title_block" ? (
              <TitleBlock
                title={component.primary.feature_title_block[0].text}
              />
            ) : null}
            {component.type === "mockup_image_block" ? (
              <MockupBlock
                mobile={component.primary.mockup_block_mobile.url}
                desktop={component.primary.mockup_block_desktop.url}
              />
            ) : null}
            {component.type === "image_block" ? (
              <ImageBlock
                image={component.primary.imageSharp.childImageSharp.fluid}
              />
            ) : null}
            {component.type === "redirect_block" ? (
              <RedirectBlock
                title={component.primary.redirect_title[0].text}
                subtitle={component.primary.redirect_subtitle[0].text}
                english
              />
            ) : null}
          </div>
        ))}
      </section>
      <SubscribePanel english />
    </Layout>
  )
}

export const query = graphql`
  query PostByFeatures($uid: String!) {
    prismic {
      allFeaturess(uid: $uid) {
        edges {
          node {
            seo_title
            seo_description
            card_title
            card_subtitle
            title
            subtitle
            body {
              ... on PRISMIC_FeaturesBodyTitle_block {
                type
                primary {
                  feature_title_block
                }
              }
              ... on PRISMIC_FeaturesBodyMockup_image_block {
                type
                primary {
                  mockup_block_mobile
                  mockup_block_desktop
                }
              }
              ... on PRISMIC_FeaturesBodyRedirect_block {
                type
                primary {
                  redirect_subtitle
                  redirect_title
                }
              }
              ... on PRISMIC_FeaturesBodyImage_block {
                type
                label
                primary {
                  image
                  imageSharp {
                    childImageSharp {
                      fluid(maxWidth: 1920, quality: 70) {
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
                }
              }
              ... on PRISMIC_FeaturesBodyModule_cards {
                fields {
                  module_card_title
                  module_card_subtitle
                  module_card_image
                  module_card_imageSharp {
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
                }
                type
              }
            }
          }
        }
      }
    }
  }
`

export default Feature
