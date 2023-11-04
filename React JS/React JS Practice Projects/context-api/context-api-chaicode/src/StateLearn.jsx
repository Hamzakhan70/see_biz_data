import React, { useState } from "react";
let count = 0;
function StateLearn() {
  //   let [, setCount] = useState("");
  //   let [, rerender] = useState("");
  return (
    <div>
      count:{count}
      <button
        onClick={() => {
          count++;
          //   console.log(count); //in this level with out useState React doest not know when to rerender
          // it will update the count but not show on page just work console if i simply call
          //  rerender() then React will tell the browser to rerender
          //   rerender(Math.random()); know render method work porperly and rerender the state of te component
        }}
      >
        Update
      </button>
      {/* <button> </button> */}
    </div>
  );
}

export default StateLearn;
