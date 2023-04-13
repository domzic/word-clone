import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED - 1).map((id) => {
        return <Guess key={id} guess={guesses[id]?.guess} />;
      })}
    </div>
  );
}

export default GuessesList;
