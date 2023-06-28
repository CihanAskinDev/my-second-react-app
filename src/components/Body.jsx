import { useState } from "react";

export default function Body() {
    const [counter, setCounter] = useState(1000);

    return (
        <section>
            <h2>Counter</h2>
            <p>{counter}</p>
            <button onClick={ () => {setCounter(counter + 1) } }>+</button>
            <button onClick={ () => setCounter(counter - 100) } >-</button>
        </section>
    );
}