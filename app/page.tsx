'use client'
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import WinMessage from './components/WinMessage';
import { useGameStore } from "./store/gameStore";

export default function Home() {
  const {
    isTimerActive,
    setTimeElapsed,
  } = useGameStore(state => ({
    isTimerActive: state.isTimerActive,
    setTimeElapsed: state.setTimeElapsed,
  }));

  console.log('Home component rendered');
  console.log('isTimerActive:', isTimerActive);

  return (
    <main className="Main">
      <div>
        <h1>Application is Loading...</h1>
        <Header onLanguageChange={function (language: string): void {
          throw new Error("Function not implemented.");
        } } timeElapsed={""} />

      </div>
    </main>
  );
}
