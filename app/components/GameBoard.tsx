import React, { useEffect, useState } from 'react'
import Card from './Card'
/* import Words from '../api/words.json' */

interface GameBoardProps {
    onCardClick: () => void;
}
const GameBoard: React.FC<GameBoardProps> = ({ onCardClick }) => {
   /*  const [cards, SetCards] = useState([{}]) */
    const [cardsData, setCardsData] = useState([{}])
    const [boardData, setBoardData] = useState({})
    
    const cardsItems = [
        {
            id: 0,
            eng: "Hello",
            est: "Tere",
            deu: "Hallo",
            esp: "Hola"
        }, 
        {
            id: 1,
            eng: "Goodbye",
            est: "Nägemist",
            deu: "Auf Wiedersehen",
            esp: "Adiós"
        },
        {
            id: 2,
            eng: "Please",
            est: "Palun",
            deu: "Bitte",
            esp: "Por favor"
        },
        {
            id: 3,
            eng: "Yes",
            est: "Jah",
            deu: "Ja",
            esp: "Sí"
        },
        {
            id: 4,
            eng: "No",
            est: "Ei",
            deu: "Nein",
            esp: "No"
        },
        {
            id: 5,
            eng: "Flower",
            est: "Lill",
            deu: "Blume",
            esp: "Flor"
        },
        {
            id: 6,
            eng: "Hello",
            est: "Tere",
            deu: "Hallo",
            esp: "Hola"
        },
        {
            id: 7,
            eng: "Goodbye",
            est: "Nägemist",
            deu: "Auf Wiedersehen",
            esp: "Adiós"
        },
        {
            id: 8,
            eng: "Please",
            est: "Palun",
            deu: "Bitte",
            esp: "Por favor"
        },
        {
            id: 9,
            eng: "Yes",
            est: "Jah",
            deu: "Ja",
            esp: "Sí"
        },
        {
            id: 10,
            eng: "No",
            est: "Ei",
            deu: "Nein",
            esp: "No"
        },
        {
            id: 11,
            eng: "Flower",
            est: "Lill",
            deu: "Blume",
            esp: "Flor"
        },
        {
            id: 12,
            eng: "Excuse me",
            est: "Vabandage",
            deu: "Entschuldigen",
            esp: "Perdón"
        },
        {
            id: 13,
            eng: "Good",
            est: "Hea",
            deu: "Gut",
            esp: "Bueno"
        },
        {
            id: 14,
            eng: "Bad",
            est: "Halb",
            deu: "Schlecht",
            esp: "Malo"
        },
        {
            id: 15,
            eng: "Love",
            est: "Armastus",
            deu: "Liebe",
            esp: "Amor"
        },
        {
            id: 16,
            eng: "Friend",
            est: "Sõber",
            deu: "Freund",
            esp: "Amigo"
        },
        {
            id: 17,
            eng: "Family",
            est: "Pere",
            deu: "Familie",
            esp: "Familia"
        }
    ];

    const getRandomCards = () => {
        const randomCards = [...cardsItems]
        .sort(() => Math.random() - .5)
        .slice(0, 8)
        setCardsData(randomCards)
    }

    const cardsDataJson = JSON.stringify(cardsData)
    console.log(cardsDataJson)

    const resetCards = () => {
        const shuffled = [...cardsData, ...cardsData]
        .sort(() => Math.random() - .5)
        .map((card) => ({...card, ...card, key: Math.random()}))
        setBoardData(shuffled)
    }

    useEffect(() => {
        getRandomCards();
    }, [])

    useEffect(() => {
        resetCards();
    }, [])


    return (
        <div className='game-board'>
            
            <div className='game-board-grid'>
                {
                    Object.values(cardsData).map((card, id) => <div style={{background: 'red'}}>
                        <Card key={id} onCardClick={onCardClick} id={id} eng={card.est}  />
                    </div>)
                }
            </div>
        </div>
    )
}

export default GameBoard