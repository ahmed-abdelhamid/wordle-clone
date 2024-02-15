import { createContext } from "react";

export type GameStatus = "won" | "lost" | "playing";

interface IWordleContext {
  currentGuess: string;
  setCurrentGuess: (value: string) => void;
  guesses: string[];
  targetWord: string;
  addGuess: (guess: string) => void;
  maxGuesses: number;
  status: GameStatus;
}

export const WordleContext = createContext<IWordleContext | undefined>(
  undefined
);
