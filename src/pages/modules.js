import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"

import "../scss/main.scss"
import ActionBar from "../components/actionBar"
import ModulesLibrary from "../components/modulesLibrary"

const Modules = () => (
  <Layout>
    <SEO title='Moduler' author='William Martinsson' />
    <PageHeader title='Våran samling moduler.' subject={'Moduler'} text='Lägg till de moduler som du behöver ifrån vårat stora modulbiblotek.' />
      <ModulesLibrary />
    <ActionBar />
  </Layout>
)


export default Modules