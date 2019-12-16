import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../scss/main.scss"
import InputButton from "../components/inputButton"
import TextSection from "../components/textSection"

import section1Img from '../images/Group 3.svg'
import setupIMG from '../images/setup.svg'
import modulesIMG from '../images/modules.svg'
// import webMockup from '../images/mockuplow.svg/'
import ProcessSection from "../components/processSection"

const IndexPage = () => (
  <Layout>
    {/* <SEO /> */}
    <section className='introduction'>
      <h1 className='introduction__title'>Your personal webagency, that only gets better over <span className='Highlighted'>time.</span></h1>
      <span className='introduction__subtitle'>You tell us about your business and we handle the rest. We use a combination between conversational UI and AI to create the best solution for you.</span>
      <InputButton />
    </section>

    <TextSection 
      modifier='left' 
      img={setupIMG} 
      title={<span>Have a <span className='highlighted'>conversation</span> with us and we will create the best website for you.</span>}
      text={"For all the non-designers out there. We know its hard to create a website even with the various website creators. That's why we have built a unique setup process that is conversational instead of visual so we can learn as much as possible about your business to create the best website for you."} 
    />

    <ProcessSection />

    <TextSection 
      modifier='right' 
      img={section1Img} 
      title={<span>In a forever <span className='highlighted'>changing</span> landscape, your website needs to change with it.</span>}
      text={'The competition to be seen to the customers online has only grown fiercer. We help you to be seen by optimizing your SEO and working iteratively with your website through A/B testing. And that without you lifting a finger.'} 
    />

    <TextSection 
      modifier='left' 
      img={modulesIMG} 
      title={<span>Different businesses have different <span className='highlighted'>needs.</span></span>}
      text={'That’s why we have plenty of modules to choose from, everything from restaurant menus to employee sections.'} 
    />
  </Layout>
)

export default IndexPage
