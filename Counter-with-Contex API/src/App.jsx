import React, { createContext, useState } from "react";

//components
import Counter1 from "./components/Counter1";

//context
import { CounterContext } from "./context/CounterContext";

function App() {
    //states
    const [counter, setCounter] = useState(0);

    //increment counter
    const increment = () => {
        setCounter((prev) => (counter < 10 ? prev + 1 : prev));
    };

    //decrement counter
    const decrement = () => {
        setCounter((prev) => (counter > 0 ? prev - 1 : prev));
    };

    return (
        <>
            <CounterContext.Provider value={{ counter, increment, decrement }}>
                <Counter1 />
            </CounterContext.Provider>
        </>
    );
}

export default App;
