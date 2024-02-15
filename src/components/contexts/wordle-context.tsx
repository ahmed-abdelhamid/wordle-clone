import { createContext } from "react";

export type GameStatus = "won" | "lost" | "playing";

interface IWordleContext {
  currentGuess: string;
  guesses: string[];
  targetWord: string;
  maxGuesses: number;
  status: GameStatus;
  setCurrentGuess: (value: string) => void;
  addGuess: (guess: string) => void;
  reset: () => void;
}

export const WordleContext = createContext<IWordleContext | undefined>(
  undefined
);
