import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

import "../scss/main.scss"
import ActionBar from "../components/actionBar"

const Why = () => (
  <Layout>
    <SEO title="Home" />
    {/* <PageHeader title='Why we are building Agenly.' subject={'About us'}/> */}
    <PageHeader title='Varför vi bygger Agenly.' subject={'Om oss'} />
    <section className='Why'>
      <h3>Why?</h3>
      <span>We live in a digital world, that's in constant change. Most companies need a digital platform if they want to be able to compete and be visible to their customers.<br></br><br></br>
        But the competition to be visible to the customers online has only grown fiercer. The most successful companies today have recognized the need for data to grow their online presence. They use methods like split-testing to get verified data. But these methods aren't available for companies that don't have an in-house development team or an agency that they work longterm with. You cannot work iteratively if you only update your website every third year.<br></br><br></br>
        Our business idea is to create a web agency driven by machine learning, that only gets better over time. We have built a unique setup process that uses a combination of conversational UI and AI to create a unique experience. In the setup process, we get to know the clients' business to the core. Everything between customer segmentation to market fit. With this information, we can create a platform made specifically for the clients' customers that can be iteratively enhanced with split-testing.<br></br><br></br>
        When we have received data from various clients, we can start comparing the different sites made by us with each other and identify faster what works and what doesn't work. New clients can start on a foundation built with existing client's data. Which creates a loop of product-enhancement, that helps both new and existing clients.
      </span>
    </section>
    <ActionBar />
  </Layout>
)

export default Why
