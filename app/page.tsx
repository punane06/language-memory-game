'use client'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import LanguagePick from "./components/LanguagePick";
import { useState } from "react";


export default function Home() {

  const [selectedLanguage, setSelectedLanguage] = useState<string>('English-Estonian');
  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    console.log('Selected language:', language);
  }


  return (
    <main className="main">
      <Header />
      <h1 className="title">Language Memory Game</h1>
      <LanguagePick onChange={handleLanguageChange} />
      <p>Currently selected language: {selectedLanguage}</p>
      

      
      <GameBoard />
    </main>
  );
}
