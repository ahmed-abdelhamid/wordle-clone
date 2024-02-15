import { createContext } from "react";

interface IWordleContext {
  currentGuess: string;
  setCurrentGuess: (value: string) => void;
  guesses: string[];
  targetWord: string;
  addGuess: (guess: string) => void;
}

export const WordleContext = createContext<IWordleContext | undefined>(
  undefined
);
