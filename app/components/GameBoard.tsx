import React, { useState } from 'react'
import Card from './Card'
import Words from '../api/words.json'

interface GameBoardProps {
    onCardClick: () => void;
}
const GameBoard : React.FC <GameBoardProps> = ({onCardClick}) => {
    return (
        <div className='game-board'>
            <h1>
                GameBoard
            </h1>
            <Card onCardClick={onCardClick}/>
            
        </div>
    )
}

export default GameBoard