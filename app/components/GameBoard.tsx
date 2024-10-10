import React, { useEffect, useState } from 'react'
import Card from './Card'
import cardsItems from '../data/words.json'

interface CardItem {
    id: number;
    text: string;
    flipped: boolean;
    found: boolean;
}

interface GameBoardProps {
    onCardClick: () => void;
}
const GameBoard: React.FC<GameBoardProps> = ({ onCardClick }) => {
    const [cardsData, setCardsData] = useState<CardItem[]>([])
    /* const [boardData, setBoardData] = useState<CardItem[]>([]) */
    const [openCards, setOpenCards] = useState<number[]>([]);
    const [matchedPairs, setMatchedPairs] = useState<number>(0);
    const [win, setWin] = useState(false);

    const getRandomCards = () => {
        const randomCards = [...cardsItems]
            .sort(() => Math.random() - .5)
            .slice(0, 8)
        const pairedCards = randomCards.flatMap(card => [
            { ...card, text: card.eng, flipped: false, found: false },
            /* Add here when its pick langauge, then est asemele picked language */
            { ...card, text: card.est, flipped: false, found: false }
        ])
        /* setCardsData(pairedCards.sort(() => Math.random() - 0.5)) */
        return pairedCards.sort(() => Math.random() - 0.5)
    }



    const resetCards = () => {
        const shuffled = [...cardsData]
            .sort(() => Math.random() - .5)
        setCardsData(shuffled)
    }

   /*  useEffect(() => {
        getRandomCards();
    }, []) */

    useEffect(() => {
        if (cardsData.length === 0) {
            const cards = getRandomCards();
            setCardsData(cards)
            /* resetCards(); */
        }
    }, [cardsData])
    console.log(resetCards)

    const handleCardClick = (index: number) => {
        onCardClick()
        if (openCards.length === 2 || cardsData[index].found || cardsData[index].flipped) return;

        const newCardsData = [...cardsData];
        newCardsData[index].flipped = true;
        setCardsData(newCardsData);
        setOpenCards([...openCards, index]);

        if (openCards.length === 1) {
            // If two cards are open, check if they match
            const firstCardIndex = openCards[0];
            const secondCardIndex = index;

            const firstCard = cardsData[firstCardIndex];
            const secondCard = cardsData[secondCardIndex];

            if (firstCard.id === secondCard.id) {
                // Cards match
                newCardsData[firstCardIndex].found = true;
                newCardsData[secondCardIndex].found = true;
                setMatchedPairs(matchedPairs + 1);

                 if (matchedPairs + 1 === 8) {
                   // All pairs found, game won
                   setWin(true);
                 }
                setOpenCards([])
            } else {
                // Cards don't match, flip them back after 3 seconds
                setTimeout(() => {
                    newCardsData[firstCardIndex].flipped = false;
                    newCardsData[secondCardIndex].flipped = false;
                    setCardsData(newCardsData);
                    setOpenCards([])
                }, 1000);
            }
            setOpenCards([]); // Reset open cards after checking
        }
    }


    return (
        <div className='game-board'>

            <div className='game-board-grid'>
                {cardsData.map((card, index) => (
                    <Card key={index} onCardClick={() => handleCardClick(index)} text={card.flipped || card.found ? card.text : ''} />
                ))}
            </div>
            {win && <h2>Congratulations! You Win!</h2>}
        </div>
    )
}

export default GameBoard