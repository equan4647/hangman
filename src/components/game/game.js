import React, { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
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
    const [lastLetter, setLastLetter] = useState('')

    var inp_word=''    
    var last_let =''
    var last_letAr =[]

    const handleSubmit = (e)=>{
            inp_word = e.target.value
            setLetter(inp_word)
            last_letAr = inp_word.split('')
            last_let = last_letAr[last_letAr.length-1]
            setLastLetter(last_let)
            console.log( lastLetter)
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
