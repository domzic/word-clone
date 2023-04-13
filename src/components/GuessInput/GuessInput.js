import React from "react";

function GuessInput({ handleGuess }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGuess(value);
    setValue("");
  };

  const handleChange = (e) => {
    const inputVal = e.target.value;
    if (inputVal.length <= 5) {
      setValue(e.target.value.toUpperCase());
    }
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={handleChange}
        pattern="^[a-zA-Z]{5}$"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
