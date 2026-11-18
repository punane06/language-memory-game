'use client'
import React from 'react'
import LanguagePick from "./LanguagePick";
import Button from './Button';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import { formatTime, useGameStore, type LanguagePair } from '../store/gameStore';

const Header: React.FC = () => {
  const seconds = useGameStore((state) => state.seconds);
  const newGame = useGameStore((state) => state.newGame);

  return (
    <header className="header">
      <h1 className="header-title">FIND THE PAIRS</h1>

      <div className='header-actions-container'>
        <div className='header-language'>
          <LanguagePick onChange={(language) => newGame(language as LanguagePair)} />
        </div>
        <div className="header-actions">
          <Button title={formatTime(seconds)} ariaLabel="Time elapsed" />
          <Button
            onlyIcon={<ArrowLeftIcon width={18} height={18} />}
            ariaLabel="Start a new game"
            onClick={() => newGame()}
          />
        </div>
      </div>
    </header>
  );
};

export default Header
