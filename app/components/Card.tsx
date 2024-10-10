import React, { useState } from 'react'

interface CardProps {
  onCardClick: any;
  id?: number,
  text: string,
}

const Card: React.FC<CardProps> = ({ onCardClick, id, text }) => {
  const [cardOpen, setCardOpen] = useState(false);

  /* const handleCardClick = () => {
    setCardOpen(!cardOpen);
    onCardClick();
  }; */

  return (
    <button onClick={() => onCardClick()} className={`card ${text ? 'card-open' : 'card-close'}`}>
      {text && <h2 className='card-text'>{text}</h2>}
    </button>
  )
}

export default Card