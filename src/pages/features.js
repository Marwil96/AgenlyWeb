import React from 'react';
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import SubscribePanel from "../components/subscribePanel"
import FeatureCard from '../components/featureCard';

const Features = ({data}) => {
  const featureIndex = data.prismic.allFeature_indexs.edges[0].node;
  const featuresArray = data.prismic.allFeaturess.edges;

  return (
    <Layout>
      <SEO title={featureIndex.seo_title} description={featureIndex.seo_description} author='William Martinsson' />
      <PageHeader title={featureIndex.title[0].text} text={<RichText render={featureIndex.subtitle} />} />

      <section className='Features'>
        {featuresArray.map(card => (
          <FeatureCard title={card.node.card_title[0].text} subtitle={card.node.card_subtitle[0].text} isLinked={card.node.own_page} link={`features/${card.node._meta.uid}`}/>
        ))}
      </section>

      <SubscribePanel />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allFeaturess(lang: "sv-se") {
        edges {
          node {
            card_title
            card_subtitle
            title
            subtitle
            own_page
            _meta {
              uid
            }
          }
        }
      }
      allFeature_indexs(lang: "sv-se") {
        edges {
          node {
            seo_description
            seo_title
            title
            subtitle
          }
        }
      }
    }
  }
`

export default Features;