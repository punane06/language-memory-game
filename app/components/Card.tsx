import React, { useState } from 'react'

const Card = () => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardClick = () => {
    setCardOpen(!cardOpen)
  }

  return (
    <button onClick={handleCardClick} className={`card ${cardOpen ? 'card-open' : 'card-close'}`}>
      {cardOpen && <h2 className='card-text'>Entchuldigen</h2>}
    </button>
  )
}

export default Card