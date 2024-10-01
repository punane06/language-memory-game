'use client'
import React from 'react'
import Select from 'react-select';

interface LanguageSelectorProps {
    onChange: (language: string) => void;
  }
  const languageOptions = [
    { value: 'English-Estonian', label: 'English-Estonian' },
    { value: 'English-Spanish', label: 'English-Spanish' },
    { value: 'English-French', label: 'English-French' },
    // Add more languages as needed
  ];


  const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    const handleChange = (selectedOption: any) => {
      onChange(selectedOption?.value);
    };
    
    return (
      <div className="language-selector">
        <Select
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