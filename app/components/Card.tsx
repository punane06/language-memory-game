'use client'
import React from 'react'

interface CardProps {
  text: string;
  lang: string;
  isOpen: boolean;
  isFound: boolean;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({ text, lang, isOpen, isFound, onCardClick }) => {
  return (
    <button
      type="button"
      className={`card ${isOpen ? 'is-open' : ''} ${isFound ? 'is-found' : ''}`}
      onClick={onCardClick}
      aria-label={isOpen ? `${text}${isFound ? ', matched' : ''}` : 'Hidden card'}
      aria-disabled={isFound || undefined}
    >
      <span className="card-inner" aria-hidden="true">
        <span className="card-face card-front">?</span>
        <span className="card-face card-back" lang={lang}>{text}</span>
      </span>
    </button>
  );
};

export default Card
