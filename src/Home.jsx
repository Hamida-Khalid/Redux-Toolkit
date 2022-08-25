import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

function Home() {

    const dispatch = useDispatch();

    return (
        <div className="Home">
            <button onClick={() => {
                dispatch(increment())
            }}>+</button>
            <button onClick={() => {
                dispatch(decrement())

            }}>-</button>
        </div>
    );
}

export default Home;
