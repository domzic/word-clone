import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <span className="cell" key={num}>
          {value ? value[num] : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
