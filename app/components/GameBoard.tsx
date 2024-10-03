import React, { useState } from 'react'
import Card from './Card'
import Words from '../api/words.json'

const GameBoard = () => {

    console.log(Words)
    return (
        <div className='game-board'>
            <h1>
                GameBoard
            </h1>
            <Card />

        </div>
    )
}

export default GameBoard