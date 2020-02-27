import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

const ModulesLibrary = (props) => {
  let imageArray = {}
  let modulesArray = [
    {
      title: "Meny.",
      image: "Food",
      text:
        "Lägg till dina rätter i en fin meny och visa upp den för hemsidans besökare.",
    },
    {
      title: "SEO-anpassad text.",
      image: "SocialMedia",
      text:
        "Vi hjälper dig att skriva en SEO-anpassad text. För att du ska komma högt upp på google.",
    },
    {
      title: "Bildspel.",
      image: "Images",
      text:
        "Ladda upp egna bilder eller sök efter bilder i Unsplash gigantiska bildbank.",
    },
    {
      title: "Facebook sida.",
      image: "embed",
      text:
        "Locka användare att gilla din facebook sida, genom att visa upp din facebook sida på din hemsida.",
    },
    {
      title: "Citat.",
      image: "Quote",
      text: "Lägg upp ett inspirerande citat.",
    },
    {
      title: "Öppetider.",
      image: "Openinghours",
      text:
        "Visa din butiks öppetider, hemsidan läser smart av ifall din affär är öppen och berättar det för hemside besökaren.",
    },
    {
      title: "Medarbetar sektion.",
      image: "Employeesection",
      text: "Visa upp dina medarbetare.",
    },
    {
      title: "Text om företaget.",
      image: "About",
      text:
        "Använd våran mall och fyll i information om erat företag. Då kan vi automatiskt skapa en text om erat företag.",
    },
    {
      title: "Recensioner.",
      image: "Review",
      text: "Lägg upp era Google recensioner.",
    },
    {
      title: "Call To Action.",
      image: "Link",
      text: "Länka till en externsida.",
    },
  ]
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { relativeDirectory: { eq: "modules" } }) {
        nodes {
          name
          relativePath
          publicURL
          relativeDirectory
        }
      }
    }
  `)

  data.allFile.nodes.map((item) => {
    const name = item.name;
    imageArray[name] = {url:item.publicURL}
  })

  console.log(data.allFile, props, imageArray)
  return (
    <section className="ModulesLibrary">
      <div className="ModulesLibrary__container">
        {modulesArray.map(item => (
          <div className="ModulesLibrary__item">
            <img
              className="ModulesLibrary__image"
              src={imageArray[item.image].url}
            />
            <h3 className="ModulesLibrary__title">{item.title}</h3>
            <span className="ModulesLibrary__text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ModulesLibrary;