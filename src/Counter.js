import React from 'react'

const Counter = () => {
    let [count, setState] = useState(0)
    let handleClick = () => {
        setState(count+1)
    }
    let handleClickMinus = () => {
        setState(count -1)
    }

    let handleClickReset = () => {
        setState(0)
    }
    
    return(
        <div>
            <p>you clicked {count}</p>
            <button onClick={handleClick}> Plus 1</button>
        </div>

    )


    }
    