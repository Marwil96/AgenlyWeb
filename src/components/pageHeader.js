import React from 'react';
// import Button from './button';

const PageHeader = (props) => {
  return (
    <section className='PageHeader'>
      <div className='PageHeader__container'>
        <h1 className='PageHeader__title'>{props.title}</h1>
        <span className='PageHeader__text'>{props.text}</span>
        {/* <Button text='Get Started' /> */}
      </div>
    </section>
  )
}

export default PageHeader;