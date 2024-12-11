'use client'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import { useGameStore } from "./store/gameStore";

export default function Home() {
  const {
    isTimerActive,
    timeElapsed,
    setTimeElapsed,
    handleLanguageChange
  } = useGameStore();

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
        <GameBoard />
      </div>
    </main>
  );
}
