import { ReactNode, useState } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";

export const TARGET_WORD = "table";

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

  return (
    <WordleContext.Provider
      value={{ currentGuess, guesses, targetWord: TARGET_WORD, addGuess }}
    >
      {children}
    </WordleContext.Provider>
  );
};
