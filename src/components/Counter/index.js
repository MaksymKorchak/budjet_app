import { useState, useEffect, useRef } from "react";

const Counter = () => {
    const [clicks, setClicks] = useState(0);
    const currentValue = useRef();

    const showValue = () => {
        setTimeout(() => {
            alert(clicks)
        },300)
    };

    useEffect(() => {
        console.log('Render', currentValue)
    }, [clicks])

    return (
        <div>
            <div ref={currentValue}>Clicked: {clicks}</div>
            <button onClick={() => setClicks(clicks + 1)}>Click for Add 1</button>
            <button onClick={showValue}>Show value of clicks</button>
        </div>
    )
}

export default Counter;