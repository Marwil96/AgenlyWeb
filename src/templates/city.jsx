import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageHeader from "../components/pageHeader"
import SubscribePanel from "../components/subscribePanel"
import TitleBlock from "../components/titleblock"
import MockupBlock from "../components/mockupBlock"
import RedirectBlock from "../components/redirectBlock"

const City = ({pageContext}) => {
  return (
    <Layout>
      <SEO title={`Webbyrå ${pageContext.city} || Gratis Hemsida`} description={`Agenly skapar moderna och responsiva hemsidor. Testa på och gör din helt egna hemsida gratis. Specialerbjudande för personer från ${pageContext.city} `} author="Agenly" />
      <PageHeader
        title={`Webbyrå ${pageContext.city}`}
        text={'Skapa din helt egna hemsida med Agenly istället för trassliga hemsideskapare.'}
      />
      <section className="FeatureTemplate">
        <TitleBlock title={"Det är så lätt att skapa en hemsida med Agenly så det går att skapa den med både mobil och dator."} />
        <MockupBlock mobile='https://images.prismic.io/agenly/43ead1a7-b7af-4f37-92cd-0ad6e31403bf_iPhone+8+1.png?auto=compress,format' desktop='https://images.prismic.io/agenly/311510bb-1f7e-43d2-8c08-131ec84d12d8_agenly+desktop.png?auto=compress,format'/>
        <TitleBlock title={"Din hemsida uppdateras automatisk över tid. Så du behöver inte lyfta ett finger, om du mot förmodan gör det kan du enkelt ändra på hemsidan från mobilen."} />
        <RedirectBlock title='Varför är det enkelt?' subtitle='Våran uppstartprocess innehåller inte kod och andra svåra moment. För att få en hemsida hos oss behöver du enbart svara på några frågor.'/>
      </section>
      <SubscribePanel />
    </Layout>
  )
}

export default City
