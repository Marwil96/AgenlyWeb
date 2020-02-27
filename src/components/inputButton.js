import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const InputButton = (props) => {
  const [emailValue, setEmailValue] = useState('')
  const [subscriptionState, setSubscriptionState] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await addToMailchimp(emailValue)
    setSubscriptionState(result)

    if(result.result === 'success') {
      setEmailValue('')
    }
  }

  const inputHandler = (e) => {
    console.log(e.target.value)

    setEmailValue(e.target.value)
  }

  return (
    <form className={props.modifier !== undefined ? `InputButton InputButton__${props.modifier}` : `InputButton`} onSubmit={handleSubmit}>
      <input type='email' placeholder='Your email adress' onChange={inputHandler} value={emailValue} />
      <button className={subscriptionState ? 'subscribed' : ''} onClick={handleSubmit}>{subscriptionState ? 'Thanks for subscribing!' :'Subscribe for newsletter'}</button>
    </form>
  )
}

export default InputButton
