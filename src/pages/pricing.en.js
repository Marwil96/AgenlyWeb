import React from "react"
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import "../scss/main.scss"
import PricingCard from "../components/pricingCard"
import SubscribePanel from "../components/subscribePanel"

const Pricing = ({data}) => {
  const pricingData = data.prismic.allPricings.edges[0].node
  
  return(
    <Layout english='en'>
      <SEO title={pricingData.title[0].text} description={RichText.asText(pricingData.subtitle)} author='William Martinsson' />
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
              english
            />
          ))}
        </div>
        <span>{pricingData.currency[0].text}</span>
      </section>

      <SubscribePanel english />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allPricings(lang: "en-us") {
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