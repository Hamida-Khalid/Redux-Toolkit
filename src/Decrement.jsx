import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { decrementByAmount, incrementByAmount } from "./redux/counterSlice";


function Decrement() {
    const dispatch = useDispatch();
    const [num, setNum] = useState(0);
    return (
        <div className="Decrement">

            <input type={"number"} value={num} onChange={(e) => {
                setNum(e.target.value)
            }} />
            <button onClick={() => {
                dispatch(incrementByAmount(parseInt(num)))
            }}>Increment By Amout</button>
            <button onClick={() => {
                dispatch(decrementByAmount(parseInt(num)))

            }}>Decrement By Amount</button>
        </div>
    );
}

export default Decrement;
