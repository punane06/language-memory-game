'use client'
import React from 'react'
import LanguagePick from "./LanguagePick";
import { formatTime, useGameStore, type LanguagePair } from '../store/gameStore';

const Header: React.FC = () => {
  const seconds = useGameStore((state) => state.seconds);
  const newGame = useGameStore((state) => state.newGame);

  return (
    <header className="header">
      <h1 className="header-title">Find the pairs</h1>
      <p className="header-intro">Turn two cards. Find the word and its translation.</p>

      <div className='header-actions-container'>
        <div className='header-language'>
          <LanguagePick onChange={(language) => newGame(language as LanguagePair)} />
        </div>
        <div className="header-actions">
          <span className="timer" aria-label={`Time ${formatTime(seconds)}`}>
            <span aria-hidden="true">⏱</span> {formatTime(seconds)}
          </span>
          <button type="button" className="button" onClick={() => newGame()}>
            New game
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header
