import React, { useState } from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import Box from './box/box'
import "./game.css"


const Game = ({guessWord}) => {

    const [letter, setLetter] = useState('')
    const [lastLetter, setLastLetter] = useState('')


    guessWord = "pokemon"
    var wordArr = guessWord.split('');
    var dummyarr=[]
    dummyarr = wordArr.map((ch)=>{
        return ({
            letter : ch,
            found : false
        })
    })
    const [labelArray, setlabelArray] = useState(dummyarr)

  //  setlabelArray(dummyarr)
   // console.log(wordArr)
    
    const  mapBox  = (
      
        
        labelArray.map( (arr)=>{
            
          return  <Box key={wordArr.indexOf(arr).toString()} found={arr.found} ch={arr.letter}/>
        })

    )

         

    var inp_word=''    
    var last_let =''
    var last_letAr =[]

    function handleSubmit(e){
            // inp_word = e.target.value
            // setLetter(inp_word)

            last_letAr = e.target.value.split('')
            last_let = last_letAr[last_letAr.length-1]
            setLastLetter(last_let)


            labelArray.forEach(element => {
         

                if (last_let == element.letter ) {
                    element.found = true
                    let newArr = [...labelArray]; // copying the old datas array
                    let num = labelArray.indexOf(element)
                    newArr[num].found = true; // replace e.target.value with whatever you want to change it to
                
                    setlabelArray(newArr); // ??
                }
            });
         console.table(labelArray)
        
    }

    return (
        <div >
            <input onChange={handleSubmit} type="text"/>
            <div className="game">
                {mapBox}
                {/* <button> {lastLetter} </button> */}
            </div> 
        </div>
    )
}

export default Game
