import React from 'react';
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import SubscribePanel from "../components/subscribePanel"

const Legal = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} author='William Martinsson' />
      <PageHeader title={pageContext.title} text={<RichText render={'YO'} />} />
      <section className='Legal'>
        <RichText render={pageContext.content} />
      </section>
      <SubscribePanel />
    </Layout>
  )
}


export default Legal;