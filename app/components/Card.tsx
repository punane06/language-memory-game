'use client'
import React from 'react'

interface CardProps {
  text: string;
  isOpen: boolean;
  isFound: boolean;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ text, isOpen, isFound, onCardClick }) => {
  return (
    <button
      type="button"
      className={`card ${isOpen ? 'card-open' : 'card-close'} ${isFound ? 'card-found' : ''}`}
      onClick={onCardClick}
      aria-label={isOpen ? text : 'Hidden card'}
      disabled={isFound}
    >
      {isOpen && <span className="card-text">{text}</span>}
    </button>
  );
};

export default Card
