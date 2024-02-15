import { ChangeEvent, FormEvent, useContext } from "react";

import { Input } from "@/components/ui/input";
import { WordleContext } from "@/components/contexts/wordle-context";

export const WordForm = () => {
  const context = useContext(WordleContext);

  if (!context) return null;

  const { currentGuess, setCurrentGuess, addGuess } = context;
  const handleGuessChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentGuess(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(currentGuess);
    addGuess(currentGuess);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-1">
      <Input
        id="word"
        pattern="[A-Za-z]{5}"
        title="Your guess should be only letters and 5 letters long"
        placeholder="Guess Word"
        value={currentGuess}
        onChange={handleGuessChange}
      />
    </form>
  );
};
