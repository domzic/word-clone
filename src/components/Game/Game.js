import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [guess, setGuess] = React.useState("");

  const handleGuess = (newGuess) => {
    setGuess(newGuess);
    setGuessesList((prev) => [...prev, { guess: newGuess, id: Math.random() }]);
  };

  return (
    <>
      <GuessesList guesses={guessesList} />
      <GuessInput handleGuess={handleGuess} />
    </>
  );
}

export default Game;
