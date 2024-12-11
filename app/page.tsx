'use client'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import { useGameState } from "./hooks/useGameState";

export default function Home() {
  const {
    gameState: {
      selectedLanguage,
      isTimerActive,
      timeElapsed,
    },
    handleLanguageChange,
    handleCardClick,
    setTimeElapsed,
  } = useGameState();

  return (
    <main className="Main">
      <div>
        <Header
          timeElapsed={timeElapsed}
          onLanguageChange={handleLanguageChange}
        />
        <Timer
          isActive={isTimerActive}
          onTimeUpdate={setTimeElapsed}
        />
        <GameBoard 
          onCardClick={handleCardClick} 
          selectedLanguage={selectedLanguage} 
        />
      </div>
    </main>
  );
}
