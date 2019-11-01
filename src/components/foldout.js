import React from "react"

const Foldout = ({index, title, text}) => {
  const toggleText = (e) => {
    const targetId = e.currentTarget;
    console.log(index)
    document.querySelector(`#Foldout-${index}`).classList.toggle('collapsed')
  }
  
  return (
    <div className="Foldout collapsed" id={`Foldout-${index}`}>                    
      <button onClick={toggleText} className="Foldout__button">
        <h4 className="Foldout__title">{title}</h4>
        <svg className="Foldout__button-arrow" viewBox="0 0 16 12">
          <path d="M8.5 3.22l6.05 5.95c.45.44 1.17.44 1.62 0 .44-.44.44-1.15 0-1.59L9.3.83a1.16 1.16 0 00-1.62 0L.83 7.58a1.11 1.11 0 000 1.59c.45.44 1.17.44 1.62 0L8.5 3.22z" fill="#BFBFBF" fillRule="nonzero"/>
        </svg>
      </button>

      <span className="Foldout__text"> {text} </span>
  </div>
  )
}

export default Foldout
