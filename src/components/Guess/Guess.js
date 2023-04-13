import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {(guess ? [...guess] : range(0, 5)).map((letter, letterIndex) => (
        <span className="cell" key={`${letter}-${letterIndex}`}>
          {guess ? letter : ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
