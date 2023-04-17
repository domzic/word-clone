import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesList from "../GuessesList";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [isGameOver, setIsGameOver] = React.useState({ value: false });

  React.useEffect(() => {
    if (guessesList.length === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver({ value: true, status: "lost" });
    }
  }, [guessesList.length]);

  const handleGuess = (newGuess) => {
    setGuessesList((prev) => [
      ...prev,
      { letters: checkGuess(newGuess, answer), id: Math.random() },
    ]);

    if (newGuess === answer) {
      setIsGameOver({ value: true, status: "won" });
    }
  };

  return (
    <>
      <GuessesList guesses={guessesList} />
      <GuessInput handleGuess={handleGuess} disabled={isGameOver.value} />
      {isGameOver.value && (
        <Banner
          won={isGameOver.status === "won"}
          answer={answer}
          guessesCount={guessesList.length}
        />
      )}
    </>
  );
}

export default Game;
