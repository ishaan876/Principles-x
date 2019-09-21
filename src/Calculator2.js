import React, {useState} from 'react';
import './button.css';


const Calculator2 = () => {
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

export default Calculator2


