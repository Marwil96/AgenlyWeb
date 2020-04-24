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
  console.log(featuresArray)
  return (
    <Layout>
      <SEO title='Features' author='William Martinsson' />
      <PageHeader title={featureIndex.title[0].text} text={<RichText render={featureIndex.subtitle} />} />

      <section className='Features'>
        {featuresArray.map(card => (
          <FeatureCard title={card.node.card_title[0].text} subtitle={card.node.card_subtitle[0].text}/>
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
          }
        }
      }
      allFeature_indexs(lang: "sv-se") {
        edges {
          node {
            title
            subtitle
          }
        }
      }
    }
  }
`

export default Features;