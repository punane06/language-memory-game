'use client'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Timer from "./components/Timer";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English-Estonian');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [matchesFound, setMatchesFound] = useState(0); // Track number of matches found
  const [timeElapsed, setTimeElapsed] = useState('00:00');
  const totalMatches = 8; // Example: total pairs in your game

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    /* console.log('Selected language:', language); */
  }

  
  const handleCardClick = () => {
    if (!isTimerActive) {
      setIsTimerActive(true);
    }
  };
  
  const handleMatchFound = () => {
    setMatchesFound((prev) => prev + 1);
    if (matchesFound + 1 === totalMatches) {
      setIsTimerActive(false); // Stop timer when all matches found
    }
  };
  
  const handleGameReset = () => {
    setIsTimerActive(false);
    setMatchesFound(0);
    setTimeElapsed('00:00');
  };
  /* console.log(selectedLanguage,handleMatchFound,handleGameReset) */
  
  return (
    <main className="Main">
      <div>
        <Header
          timeElapsed={timeElapsed}
          onLanguageChange={handleLanguageChange}
        />
        <Timer
          isActive={isTimerActive} onTimeUpdate={setTimeElapsed}
        />
       
        <GameBoard onCardClick={handleCardClick} selectedLanguage={selectedLanguage} />
      </div>
    </main>
  );
}
