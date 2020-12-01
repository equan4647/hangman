import React, { useState } from 'react'
import Box from './box/box'
import Victory from './Victory/victory'
import "./game.css"


const Game = ({guessWord}) => {

    


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
    const [win, setWin] = useState(false)

  //  setlabelArray(dummyarr)
   // console.log(wordArr)
    
    const  mapBox  = (
      
        
        labelArray.map( (arr)=>{
            
          return  <Box key={wordArr.indexOf(arr).toString()} found={arr.found} ch={arr.letter}/>
        })

    )


    function checkWin () {

            let  temp_win = true 

            labelArray.forEach(element => {
                if (element.found===false) {
                    temp_win = false
                }
               
            });
            
            if (temp_win) {
                setWin(true)
            }
    }   

         

  
    var last_let =''
    var last_letAr =[]

    function handleSubmit(e){
            

            last_letAr = e.target.value.split('')
            last_let = last_letAr[last_letAr.length-1]
          


            labelArray.forEach(element => {
         

                if (last_let === element.letter ) {
                    element.found = true
                    let newArr = [...labelArray]; // copying the old datas array
                    let num = labelArray.indexOf(element)
                    newArr[num].found = true; // replace e.target.value with whatever you want to change it to
                
                    setlabelArray(newArr); // ??
                }
            });

            checkWin()
        
        
    }

    return (
        <div >
            <input onChange={handleSubmit} type="text"/>
            <div className="game">
                {mapBox}
                { (win) ?  <Victory /> : <React.Fragment></React.Fragment>} 
                
            
            </div> 
        </div>
    )
}

export default Game
