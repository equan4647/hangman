import React from 'react'
import './box.css'

const Box = ({found,ch}) => {


    
    // const rn = (
    // //        console.log( 'bilawa',found)

    //     if (this.props.found) {
    //         return(
    //              <div   className="box">
    //              ?
    //           </div>)
    //     } else {
    //         return(<div   className="box">
    //              Found
    //           </div>)
            
    //     }


    // )


    return (
        <div>
                

                { //Check if message failed
                 
                    (found==false )
                   
                            ? <div className="box"> ? </div> 
                            : <div className="dabba"> {ch} </div> 
          }
                {console.log(found)}
                
        </div>
    )
}

export default Box
