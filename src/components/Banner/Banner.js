import React from "react";

function Banner({ won, answer, guessesCount }) {
  return (
    <div className={`${won ? "happy" : "sad"} banner`}>
      {won ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {guessesCount} {guessesCount === 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default Banner;
