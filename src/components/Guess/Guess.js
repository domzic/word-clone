import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(0, 5).map((num) => (
        <span className={`cell ${value?.letters[num]?.status}`} key={num}>
          {value ? value.letters[num].letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
