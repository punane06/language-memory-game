import React from 'react'
import LanguagePick from "./LanguagePick";
import Button from './Button';
import ArrowDownIcon from './icons/ArrowLeftIcon';

interface HeaderProps {
  onLanguageChange: (language: string) => void;
  timeElapsed: string;
}

const Header: React.FC<HeaderProps> = ({ timeElapsed, onLanguageChange }) => {
  return (
    <header className="header">
      <h1 className="header-title">FIND THE PAIRS</h1>

      <div className='header-actions-container'>
        <div className='header-language'>
          <LanguagePick onChange={onLanguageChange} />
        </div>
        <div className="header-actions">
          <Button title={`${timeElapsed}`} />
          <Button onlyIcon={<ArrowDownIcon width={18} height={18} />} />
        </div>
      </div>
    </header>
  );
};

export default Header