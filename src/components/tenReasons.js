import React from 'React';
import Flickity from 'react-flickity-component'

const TenReasons = () => {
  const reasons = [
    { title: 'Testa och betala sen.', text:'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?'},
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' },
    { title: 'Testa och betala sen.', text: 'Testa och kör, vi tar inte pengar för första månaden. Finns det någon webbyrå i världen som har det erbjudandet?' }
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
      <h3 className="TenReasons__title">10 Anledningar</h3>

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
            <h5 className="TenReasons__item-title">Testa och betala sen.</h5>
            <span className="TenReasons__item-text">
              Testa och kör, vi tar inte pengar för första månaden. Finns det
              någon webbyrå i världen som har det erbjudandet?
            </span>
          </div>
        ))}
      </Flickity>
      {/* </div> */}
    </section>
  )
}

export default TenReasons;