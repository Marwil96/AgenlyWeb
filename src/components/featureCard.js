import React from 'react';

const FeatureCard = ({ title, subtitle, link }) => {
  return (
    <div className='FeatureCard'>
      <h3 className='FeatureCard__title'>{title}</h3>
      <span className='FeatureCard__subtitle'>{subtitle}</span>
      <a href='google.com' tager='__blank' className='FeatureCard__link'>Läs mer 
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14">
          <path
            d="M0 7.62h12.67l-4.6 4.63 1.23 1.23L16 6.74 9.3 0 8.07 1.24l4.6 4.63H0v1.75z"
            fill="#fff"
          />
        </svg>
      </a>
    </div>
  )
}

export default FeatureCard;