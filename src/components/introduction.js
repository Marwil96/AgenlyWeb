import React from "react";
import InputButton from "./inputButton";

const Introduction = () => {
  return (
    <section className="introduction">
      <h1 className="introduction__title">
        Your personal webagency, that only gets better over <span className="Highlighted">time.</span>
      </h1>
      <span className="introduction__subtitle">
        You tell us about your business and we handle the rest. We use a
        combination between conversational UI and AI to create the best solution
        for you.
      </span>
      <InputButton modifier='primary' />
    </section>
  )
};

export default Introduction;
