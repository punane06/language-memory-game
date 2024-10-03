import React, { useState } from 'react'

interface CardProps {
  onCardClick: () => void; 
}

const Card: React.FC<CardProps> = ({ onCardClick }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardClick = () => {
    setCardOpen(!cardOpen);
    onCardClick();
  };

  return (
    <button onClick={handleCardClick} className={`card ${cardOpen ? 'card-open' : 'card-close'}`}>
      {cardOpen && <h2 className='card-text'>Entchuldigen</h2>}
    </button>
  )
}

export default Card