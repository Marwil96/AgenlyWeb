import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

const SignupButton = ({modifier, text}) => {
  const [emailValue, setEmailValue] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    window.location.href = `https://app.agenly.se/createAccount?${emailValue}`
  }

  const inputHandler = e => {
    setEmailValue(e.target.value)
  }

  return (
    <form
      className={
        modifier !== undefined
          ? `InputButton InputButton__${modifier}`
          : `InputButton`
      }
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Din emailadress"
        onChange={e => setEmailValue(e.target.value)}
        value={emailValue}
      />
      <button> {text} </button>
    </form>
  )
}

export default SignupButton;
