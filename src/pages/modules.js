import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

import "../scss/main.scss"
import ActionBar from "../components/actionBar"
import ModulesLibrary from "../components/modulesLibrary"

const Modules = () => (
  <Layout>
    <SEO title='Build a Website - Webbyrå – Website Builder – Agenly' description='With Agenly you tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best website for you.' author='William Martinsson' />
    <PageHeader title='Våran samling moduler.' subject={'Moduler'} text='Lägg till de moduler som du behöver ifrån vårat stora modulbiblotek.' />
      <ModulesLibrary />
    <ActionBar />
  </Layout>
)


export default Modules