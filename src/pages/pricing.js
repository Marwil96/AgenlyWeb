import React from "react"
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

import "../scss/main.scss"
import ActionBar from "../components/actionBar"
import ModulesLibrary from "../components/modulesLibrary"
import PricingCard from "../components/pricingCard"
import SubscribePanel from "../components/subscribePanel"

const Pricing = ({data}) => {
  const pricingData = data.prismic.allPricings.edges[0].node
  console.log(pricingData)
  return(
    <Layout>
      <SEO title='Moduler' author='William Martinsson' />
      <PageHeader title={pricingData.title[0].text} text={<RichText render={pricingData.subtitle} />} />

      <section className='Pricing'>
        <div className='Pricing__card-container'>
          {pricingData.body.map((card) => (
            <PricingCard 
              focus={card.primary.card_focus} 
              price={card.primary.card_price} 
              unit={card.primary.card_unit} 
              title={card.primary.card_title} 
              subtitle={card.primary.card_subtitle} 
              list={card.fields}
              />
          ))}
          {/* <PricingCard focus />
          <PricingCard />
          <PricingCard /> */}
        </div>
        <span>{pricingData.currency[0].text}</span>
      </section>

      <SubscribePanel />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allPricings(lang: "sv-se") {
        edges {
          node {
            currency
            body {
              ... on PRISMIC_PricingBodyPricing_card {
                fields {
                  card_list_item
                }
                primary {
                  card_focus
                  card_helper_text
                  card_price
                  card_subtitle
                  card_title
                  card_unit
                }
              }
            }
            subtitle
            title
          }
        }
      }
    }
  }
`


export default Pricing