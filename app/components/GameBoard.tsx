'use client'
import React, { useEffect } from 'react'
import Card from './Card'
import { useGameStore } from '../store/gameStore'

interface CardItem {
    id: number;
    text: string;
    matched?: boolean;
}

const cardsItems: CardItem[] = [
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    // Add more cards as needed
];

const GameBoard: React.FC = () => {
    const { 
        cardsData,
        openCards,
        handleCardClick,
        setCardsData
    } = useGameStore();

    const getRandomCards = () => {
        const randomCards = [...cardsItems]
            .sort(() => Math.random() - .5)
            .slice(0, 8)
            .flatMap(card => [
                { ...card, id: card.id * 2 - 1 },
                { ...card, id: card.id * 2 }
            ])
            .sort(() => Math.random() - .5);
        
        setCardsData(randomCards);
    };

    useEffect(() => {
        getRandomCards();
    }, []);

    return (
        <div className="game-board">
            {cardsData.map((card) => (
                <Card
                    key={card.id}
                    text={card.text}
                    onCardClick={() => handleCardClick(card.id)}
                    isFlipped={openCards.includes(card.id) || card.matched || false}
                />
            ))}
        </div>
    )
}

export default GameBoard;