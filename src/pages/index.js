import React, {useEffect, useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../scss/main.scss"
import TextSection from "../components/textSection"
import Introduction from "../components/introduction"

import section1Img from '../images/Group 3.svg'
import setupIMG from '../images/setup.svg'
import modulesIMG from '../images/modules.svg'
// import webMockup from '../images/mockuplow.svg/'
import ProcessSection from "../components/processSection"
import TenReasons from "../components/tenReasons"
import ExampleSites from "../components/exampleSites"
import ActionBar from "../components/actionBar"

const IndexPage = () => {

  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
  }, [])
  return (
    <Layout>
      <SEO title='Hem' description='Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.' author='William Martinsson' />

      <Introduction />

      <TextSection 
        loaded={loaded}
        modifier='left' 
        img={setupIMG} 
        // title={<span>Have a <span className='highlighted'>conversation</span> with us and we will create the best website for you.</span>}
        title={<span>Ha en <span className='highlighted'>konversation</span> med oss och vi skapar den bästa hemsidan för dig. </span>}
        text={'För alla icke-designers, vi vet att det är jobbbigt att skapa en hemsida genom de diverse hemsideskaparna. Det är därför vi har byggt en helt unik uppstartsprocess som är konversationell istället för visuell så att vi kan lära oss så mycket som möjligt om ditt företag för att skapa bästa hemsidan för dig.  '}
        // text={"For all the non-designers out there. We know its hard to create a website even with the various website creators. That's why we have built a unique setup process that is conversational instead of visual so we can learn as much as possible about your business to create the best website for you."} 
      />

      <TenReasons />

      <TextSection 
        modifier='right' 
        img={section1Img}
        title={<span>Din hemsida måste kunna  <span className='highlighted'>förändras</span> med tidens gång.</span>}
        text={'Konkurransen för att bli sedd av kunder online har bara blivit hårdare. Vi hjälper dig bli sedd genom att optimera din SEO och arbeta iterativt med din hemsida genom A/B testning, och det utan att du behöver lyfta ett finger.'}
        // title={<span>In a forever <span className='highlighted'>changing</span> landscape, your website needs to change with it.</span>}
        // text={'The competition to be seen to the customers online has only grown fiercer. We help you to be seen by optimizing your SEO and working iteratively with your website through A/B testing. And that without you lifting a finger.'} 
      />

      <ProcessSection />

      <TextSection 
        modifier='left' 
        img={modulesIMG} 
        title={<span>Olika företag har olika <span className='highlighted'>behov.</span></span>}
        // title={<span>Different businesses have different <span className='highlighted'>needs.</span></span>}
        text={'Det är därför vi har massvis med olika moduler att välja mellan. Allt från resturang menyer till medarbetar sektioner.'} 
        // text={'That’s why we have plenty of modules to choose from, everything from restaurant menus to employee sections.'} 
        button='Kolla in modulerna.'
        link='/modules'
      />

      <ExampleSites />
      <ActionBar />
    </Layout>
  )
}

export default IndexPage
