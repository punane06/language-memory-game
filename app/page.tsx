import Header from "./components/Header";
import GameBoard from "./components/GameBoard";


export default function Home() {
  return (
    <main className="main">
      <Header />
      <h1 className="title">Language Memory Game</h1>
      <GameBoard />
    </main>
  );
}
