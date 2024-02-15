import { ReactNode, useState } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";

export const TARGET_WORD = "TABLE";
export const MAX_GUESSES = 6;

interface WordleProviderProps {
  children: ReactNode;
  targetWord: string;
}

export const WordleProvider = ({
  children,
  targetWord,
}: WordleProviderProps) => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState<string>("");

  const addGuess = (guess: string) => {
    if (guess.length === targetWord.length) {
      setGuesses((prev) => [...prev, guess]);
      setCurrentGuess("");
    }
  };

  const handleSetCurrentGuess = (value: string) => {
    setCurrentGuess(value.toUpperCase());
  };

  return (
    <WordleContext.Provider
      value={{
        currentGuess,
        guesses,
        targetWord: TARGET_WORD,
        addGuess,
        setCurrentGuess: handleSetCurrentGuess,
        maxGuesses: MAX_GUESSES,
      }}
    >
      {children}
    </WordleContext.Provider>
  );
};
