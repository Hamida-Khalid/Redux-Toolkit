import React from "react";
import {useSelector} from "react-redux";

function Count() {
    // const count=useSelector((state)=> state.count)
    const {count,name}=useSelector((state)=> state.count)


    // console.log("count",count)
  return (
    <div className="Count">
      <h1>Count : {count} {name}</h1>

    </div>
  );
}

export default Count;
