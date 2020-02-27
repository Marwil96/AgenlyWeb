import React from "react"
import Foldout from "./foldout"

const ProcessSection = () => {
  const foldoutData = [
    { title: 'Uppstart.', text:'Vi ställer frågor om ditt företag genom ett konversationellt interface. Allt från affärsmodell till marknads segment.'},
    { title: 'Utvärdering.', text:"Vi utvärderar dina svar annorlunda beroende på vilken industri du jobbar i. Sen sparar vi all information för byggnadsfasen."},
    { title: 'Bygga.', text: 'När vi har utvärderat dina svar kan vi börja bygga hemsidan. Vår programvara plockar sedan ut komponenter från vår komponentkatalog som passar ditt företag. Sedan tillämpar vi ditt varumärke på hemsidan.'},
    { title: 'Förbättra.', text: 'När din hemsida är live försöker vi omedelbart göra den ännu bättre genom modern mjukvaruteknik. Vi kan automatiskt göra ändringar till sida utan att du behöver lyfta ett finger.'}
  ]

  // const foldoutData = [
  //   { title: 'Setup.', text: 'We ask you questions about your business through a conversational interface. Everything from business model to market segmentation.' },
  //   { title: 'Evaluating answers.', text: "We evaluate your answers differently depending on what business you're in. As an example, if you want a website for a restaurant we put a higher focus on the design aspect of the website." },
  //   { title: 'Build.', text: 'When we have evaluated your answers we can start building your website. Our software then picks out components from our component-catalog that fits your business. Then we apply your branding to the website.' },
  //   { title: 'Improve.', text: 'When your website is live, we immediately try to make it even better through modern software technics. If your numbers are worse one month we respond to it immediately without you lifting a finger.' }
  // ]
  return (
    <section className='ProcessSection'>
      {/* <h3 className='ProcessSection__title'>How it works.</h3> */}
      <h3 className='ProcessSection__title'>Hur vi skapar din hemsida.</h3>
      <div className='ProcessSection__container'>
        <div className='ProcessSection__foldoutContainer'>

        {foldoutData.map((item, index) => {
          return <Foldout title={item.title} text={item.text} key={index} index={index}/>
        })}
        </div>

        <div className='ProcessSection__imageContainer'>
        <svg data-name="Layer 1" viewBox="0 0 844.1 438.1">
          <circle cx="397" cy="273.1" r="130" fill="#6c63ff"/>
          <path d="M414 381.1a131.1 131.1 0 11131-131c0 72.3-58.8 131-131 131zm0-260a129 129 0 10129 129 129.1 129.1 0 00-129-129z" fill="#3f3d56"/>
          <path d="M811 441H0V0h811zM2 439h807V2H2z" fill="#3f3d56"/>
          <path fill="#f2f2f2" d="M27 35h178v18H27zM294 35h178v18H294zM561 35h178v18H561z"/>
          <path d="M217 45H37V25h180zM39 43h176V27H39zM484 45H304V25h180zm-178-2h176V27H306zM751 45H571V25h180zm-178-2h176V27H573z" fill="#3f3d56"/>
        </svg>
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
