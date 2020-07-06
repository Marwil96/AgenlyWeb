import React from "react"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import "../scss/main.scss"
import SubscribePanel from "../components/subscribePanel"

const Why = ({ data }) => {
  const whyData = data.prismic.allWhys.edges[0].node

  return (
    <Layout english="en">
      <SEO title={whyData.seo_title} description={whyData.seo_description} />
      {/* <PageHeader title='Why we are building Agenly.' subject={'About us'}/> */}
      <PageHeader title={whyData.title[0].text} subject={"Om oss"} />
      <section className="Why">
        <RichText render={whyData.text} />
      </section>
      <SubscribePanel english />
    </Layout>
  )
}

export const query = graphql`
  {
    prismic {
      allWhys(lang: "en-us") {
        edges {
          node {
            seo_title
            seo_description
            text
            title
          }
        }
      }
    }
  }
`

export default Why
