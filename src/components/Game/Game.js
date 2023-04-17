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
  const [gameStatus, setGameStatus] = React.useState("running");

  React.useEffect(() => {
    if (guessesList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }, [guessesList.length]);

  const handleGuess = (newGuess) => {
    setGuessesList((prev) => [
      ...prev,
      { letters: checkGuess(newGuess, answer), id: Math.random() },
    ]);

    if (newGuess === answer) {
      setGameStatus("won");
    }
  };

  const inProgress = gameStatus === "running";

  return (
    <>
      <GuessesList guesses={guessesList} />
      <GuessInput handleGuess={handleGuess} disabled={!inProgress} />
      {!inProgress && (
        <Banner
          won={gameStatus === "won"}
          answer={answer}
          guessesCount={guessesList.length}
        />
      )}
    </>
  );
}

export default Game;
