import React from 'react'
import LanguagePick from "./LanguagePick";
import Button from './Button';
import ArrowDownIcon from './icons/ArrowDownIcon';

const Header = ({ onLanguageChange }: { onLanguageChange: (language: string) => void }) => {
  return (
    <header className="header">
      <h1 className="header-title">FIND THE PAIRS</h1>

      <div className='header-actions-container'>
        <div className='header-language'>
          <LanguagePick onChange={onLanguageChange} />
        </div>
        <div className="header-actions">
          <Button
            title='00:20' >
          </Button>
          <Button
            onlyIcon={<ArrowDownIcon width={18} height={18} />}>
          </Button>
        </div>
      </div>
    </header>
  );
};



export default Header