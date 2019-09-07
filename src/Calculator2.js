import React, {useState} from 'react';


const Calculator = () => {
    let display = 0
    let buttonClick = (num) =>{
        return () => {
            return () => {
                console.log(num)
            }

        }
    }
    return (
        <div>
            <h2>{display}</h2>
            <button onCLick={buttonClick(1)}>1</button>
            <button>+</button>
            <button>=</button>
        </div>

    )
}