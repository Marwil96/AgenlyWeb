import React from "react";
import InputButton from "./inputButton";

const Introduction = () => {
  return (
    <section className="introduction">
      <h1 className="introduction__title">
        Din personliga webbbyrå som bara blir bättre över <span className="Highlighted">tid.</span>
      </h1>
      <span className="introduction__subtitle">
        Du berättar för oss om ditt företag och vi tar hand om resten. Vi använder en kombination av konversationell UI och Ai för att skapa bästa lösningen för dig.
      </span>
      <InputButton modifier='primary' />
    </section>
  )
};

export default Introduction;
