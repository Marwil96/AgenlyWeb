import React, {useState} from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

const InputButton = ({modifier, small, text, english}) => {
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
    <form className={modifier !== undefined ? `InputButton InputButton__${modifier}` : `InputButton`} onSubmit={handleSubmit}>
      <input type='email' placeholder={english ? 'Your emailaddress' : "Din emailadress"} onChange={inputHandler} value={emailValue} />
      <button className={subscriptionState ? 'subscribed' : ''} onClick={handleSubmit}>{subscriptionState ? 'Tack!' : small ? 'Gå med' : text}</button>
    </form>
  )
}

export default InputButton
