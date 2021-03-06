import React from 'react';
import Button from './button';
import ListItem from './listItem';

const PricingCard = ({focus, price, unit, title, helperText, subtitle, list, english}) => {
  console.log(helperText)
  return (
    <div className={`PricingCard ${focus ? 'PricingCard__focus' : ''}`}>
      <div className='PricingCard__container'>
        <h3 className='PricingCard__title'>{title[0].text}</h3>
        <span className='PricingCard__description'>{subtitle[0].text}</span>
        <div className='PricingCard__list'>
          {list.map((item) => (
            <ListItem text={item.card_list_item[0].text} />
          ))}
        </div>
      </div>
      <div className='PricingCard__container'>
        <div className='PricingCard__price-container'>
          <span className='PricingCard__price'>{price[0].text}</span>
          <span className='PricingCard__unit'>{unit[0].text}</span>
          {helperText ? <span className='PricingCard__helper-text'>{helperText[0].text}</span> : null}
        </div>
        <a className='PricingCard__button' href={english ? 'https://williammartinsson.typeform.com/to/NM0RvQyP' : 'https://app.agenly.se/createAccount'}><Button modifier='full-width' text={english ? 'Sign up for early access' : 'Kom igång'} arrow /></a>
      </div>
    </div>
  )
}

export default PricingCard;