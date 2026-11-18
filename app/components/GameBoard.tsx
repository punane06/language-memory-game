'use client'
import React from 'react'
import Card from './Card'
import { TOTAL_PAIRS, formatTime, useGameStore } from '../store/gameStore'

const GameBoard: React.FC = () => {
    const cards = useGameStore((state) => state.cards);
    const flipCard = useGameStore((state) => state.flipCard);
    const isWon = useGameStore((state) => state.isWon);
    const seconds = useGameStore((state) => state.seconds);
    const matchedPairs = useGameStore((state) => state.matchedPairs);
    const newGame = useGameStore((state) => state.newGame);

    return (
        <div className="game-board">
            <p className="game-board-status" aria-live="polite">
                {isWon
                    ? `You found all pairs in ${formatTime(seconds)}!`
                    : `Pairs found: ${matchedPairs} / ${TOTAL_PAIRS}`}
            </p>
            <div className="game-board-grid">
                {cards.map((card) => (
                    <Card
                        key={card.key}
                        text={card.text}
                        lang={card.lang}
                        isOpen={card.flipped || card.found}
                        isFound={card.found}
                        onCardClick={() => flipCard(card.key)}
                    />
                ))}
            </div>
            {isWon && (
                <button type="button" className="button game-board-again" onClick={() => newGame()}>
                    Play again
                </button>
            )}
        </div>
    )
}

export default GameBoard;
