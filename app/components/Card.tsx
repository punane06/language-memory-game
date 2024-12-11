'use client'
import React from 'react'

interface CardProps {
  text: string;
  onCardClick: () => void;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ onCardClick, text, isFlipped }) => {
  return (
    <div 
      className={`card ${isFlipped ? 'flipped' : ''}`} 
      onClick={onCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          ?
        </div>
        <div className="card-back">
          {text}
        </div>
      </div>
    </div>
  );
};

export default Card