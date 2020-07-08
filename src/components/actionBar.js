import React from 'react';
import InputButton from './inputButton';

const ActionBar = () => {
  return (
    <section className="ActionBar">
      <span className='ActionBar__text'>Följ med på resan, skriv upp dig på nyhetsbrevet.</span>
      {/* <span className='ActionBar__text'>Be a part of the ride, sign up for the newsletter.</span> */}
      <InputButton modifier={'actionBar'} />
    </section>
  )
}

export default ActionBar;