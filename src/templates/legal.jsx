import React from 'react';
import { graphql } from "gatsby";
import { RichText } from 'prismic-reactjs';
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import SubscribePanel from "../components/subscribePanel"
import ModulesLibrary from '../components/modulesLibrary';
import TitleBlock from '../components/titleblock';
import MockupBlock from '../components/mockupBlock';
import RedirectBlock from '../components/redirectBlock';

const Legal = ({ pageContext }) => {
  // const legalData = data.prismic.allLegals.edges[0].node;
  // console.log(featureData)
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