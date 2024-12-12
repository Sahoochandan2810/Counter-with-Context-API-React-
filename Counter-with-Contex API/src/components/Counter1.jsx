import React, { useContext } from "react";

//context
import { CounterContext } from "../context/CounterContext";

function Counter1() {
    const { counter, increment, decrement } = useContext(CounterContext);
    console.log(counter, "counter");
    return (
        <>
            <h1>Count is {counter}</h1>
            <div>
                <button onClick={increment}>increment </button>
                <button onClick={decrement}>decrement </button>
            </div>
        </>
    );
}

export default Counter1;
