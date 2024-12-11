import React/* , { useState } */ from 'react'

interface CardProps {
  /* eslint-disable */
  onCardClick: any;
  /* eslint-enable */
  text: string,
}

const Card: React.FC<CardProps> = ({ onCardClick, text }) => {
  /* const [cardOpen, setCardOpen] = useState(false); */

 /*  const handleCardClick = () => {
    setCardOpen(!cardOpen);
    onCardClick();
  }; */
  /* console.log(id, handleCardClick) */

  return (
    <button onClick={() => onCardClick()} className={`card ${text ? 'card-open' : 'card-close'}`}>
      {text && <h2 className='card-text'>{text}</h2>}
    </button>
  )
}

export default Card