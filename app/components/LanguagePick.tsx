'use client'
import React from 'react'
/* import Select from 'react-select'; */
import dynamic from 'next/dynamic';

const SelectWithoutSSR = dynamic(() => import('react-select'), { ssr: false });

interface LanguageSelectorProps {
    onChange: (language: string) => void;
  }
  const languageOptions = [
    { value: 'English-Estonian', label: 'English - Estonian' },
    { value: 'English-Spanish', label: 'English - Spanish' },
    { value: 'English-German', label: 'English - German' },
    // Add more languages as needed
  ];


  const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    /* eslint-disable */
    const handleChange = (selectedOption: any) => {
      /* eslint-enable */
      onChange(selectedOption?.value);
    };
    
    return (
      <div className="language-selector">
        <SelectWithoutSSR
          options={languageOptions}
          onChange={handleChange}
          defaultValue={languageOptions[0]}
          className="react-select-container"
          classNames={{
            control: (state) =>
              state.isFocused ? 'selector-isFocused' : 'selector-notFocused',
          }}
          classNamePrefix="react-select"
        />
      </div>
    );
  };
  export default LanguageSelector;