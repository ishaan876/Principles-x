import React, {useState, useEffect} from 'react'

const Final = () => {
    let [final, setFinal] = useState('')
    let handleChange = (e) =>{
        setFinal(e.target.value)
    }
        
        let handleChange2 = (e)=>{
            setFinal(e.target.value)
        }
        // let handleClick = ()=>{
        //     setFinal([
        //         ...final,
        //         {
        //             final
        //         }
        //     ])
        //     console.log(final)
        //s}
       
        return(
            <div>
                <h1>Let the computer decide!</h1>
                {
                    final.map((elem) =>{
                            return(
                            <div key = {elem.Final}>
                            <p>{elem.Final}</p>
                            </div>
                            )
                    })
                }
            </div>

        )
        
    }


export default Final