import React, { useState } from 'react'
import Box from './box/box'
import "./game.css"


const Game = ({guessWord}) => {


    guessWord = "pokemon"
    var wordArr = guessWord.split('');
    const iter =0

   // console.log(wordArr)

    const  mapBox  = (
      //  console.log('ss')
        wordArr.map( (arr)=>{
            
          return  <Box key={arr} />
        })

    )

    
    const [letter, setLetter] = useState('')
  

    const handleSubmit = (e)=>{
            setLetter(e.target.value)
        
    }

    return (
        <div >
            <input onChange={handleSubmit} type="text"/>
            <div className="game">
                {mapBox}
            </div> 
        </div>
    )
}

export default Game
