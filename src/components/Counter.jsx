import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

    const descCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (
        <>
            <div>Counter</div>
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <p>{counter}</p>
            <button onClick={descCounter} > Descrease</button >
        </>

    )
}

export default Counter