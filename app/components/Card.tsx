import React, { useState } from 'react'

interface CardProps {
  onCardClick: () => void;
  cardText?: [{
    id: Number,
    eng: string,
    est: string,
    deu: string,
    esp: string,
  }
  ];
  id: Number,
  eng: string,
  est?: string,
  deu?: string,
  esp?: string,
}

const Card: React.FC<CardProps> = ({ onCardClick, cardText, id, eng, est, deu, esp }) => {
  const [cardOpen, setCardOpen] = useState(false);

  const handleCardClick = () => {
    setCardOpen(!cardOpen);
    onCardClick();
  };

  return (
    <button onClick={handleCardClick} className={`card ${cardOpen ? 'card-open' : 'card-close'}`}>
      {cardOpen && <h2 className='card-text'>{eng}</h2>}
    </button>
  )
}

export default Card