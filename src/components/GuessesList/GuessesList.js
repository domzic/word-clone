import React from "react";
import { range } from "../../utils";
import Guess from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessesList({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((id) => {
        return <Guess key={id} value={guesses[id]} />;
      })}
    </div>
  );
}

export default GuessesList;
