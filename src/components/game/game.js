import React, { useState } from 'react'
import Box from './box/box'
import "./game.css"


const Game = ({guessWord}) => {
    guessWord = "Pokemon"
    var wordArr = guessWord.split('');

    console.log(wordArr)

    function mapBox (){
        console.log('ss')
        wordArr.map(()=>{
            // <Box/>
            <h1>sad</h1>
        })

    }


    const [letter, setLetter] = useState('')
  

    const handleSubmit = (e)=>{
            setLetter(e.target.value)
        
    }

    return (
        <div className="game">
            <input onChange={handleSubmit} type="text"/>
            {/* <Box/> */}
            {mapBox}
        </div>
    )
}

export default Game
