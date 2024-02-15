import { createContext } from "react";

interface IWordleContext {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  addGuess: (guess: string) => void;
}

export const WordleContext = createContext<IWordleContext | undefined>(
  undefined
);
