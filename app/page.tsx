'use client'
import { useEffect } from "react";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Timer from "./components/Timer";
import { useGameStore } from "./store/gameStore";

export default function Home() {
  const newGame = useGameStore((state) => state.newGame);

  useEffect(() => {
    newGame();
  }, [newGame]);

  return (
    <main className="main">
      <Header />
      <Timer />
      <GameBoard />
    </main>
  );
}
