import React from 'React';
import Flickity from 'react-flickity-component'

const TenReasons = () => {
  const reasons = [
    { title: 'Testa och betala sen.', text:'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?'},
    { title: 'Pressade priser.', text: 'Genom vår automatisering av hemsidebyggandet kan vi erbjuda prispressade hemsidor som även har blivit hårt testade.' },
    { title: 'Lyft inte ett finger.', text: 'Vi håller konstant sidan i teknologins framkant. För att ge en bra upplevelse för era kunder. ' },
    { title: 'Du äger hemsidan.', text: 'Om du vill säga upp prenumationen hos Agenly, kan du efterfråga kodbasen. Ingen annan hemsidebyggare på marknaden erbjuder det här.' },
    { title: 'Idiotsäker. ', text: 'Vi kräver inte att du har någon designkunskap. Det enda du behöver göra är att svara på några enkla frågor.' }
  ]

  const flickityOptions = {
    freeScroll: true,
    contain: true,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: false,
  }

  return (
    <section className="TenReasons">
      <h3 className="TenReasons__title">Fem anledningar varför du ska köra med Agenly.</h3>

      {/* <div className="TenReasons__item-container"> */}
      <Flickity
        className={"TenReasons__item-container"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        {reasons.map((item, index) => (
          <div className="TenReasons__item">
            <span className="TenReasons__item-number">{index + 1}.</span>
            <h5 className="TenReasons__item-title">{item.title}</h5>
            <span className="TenReasons__item-text">{item.text}</span>
          </div>
        ))}
      </Flickity>
      {/* </div> */}
    </section>
  )
}

export default TenReasons;