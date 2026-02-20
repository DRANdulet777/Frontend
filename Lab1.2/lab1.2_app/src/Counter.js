import { useState } from "react";
// Компонент счетчика 
function Counter() {
    // useState будет хранить текущие значения счетчика
    const [counterValue, setCounterValue] = useState(0);

    // функция для увеличения счетчика
    const handleIncrement = () => {
        setCounterValue(counterValue + 1);
    };

    // уменьшение счетчика
    const handleDecrement = () => {
        setCounterValue(counterValue - 1);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Simple Counter</h2>
            <p>Current Value: {counterValue}</p>

            <button onClick={handleIncrement} style={{ marginRight: "10px"}}>
                Increment
            </button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    );
}

export default Counter;