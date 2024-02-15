import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkGuess(
  correct: string,
  guess?: string
): { letter: string; status: "correct" | "incorrect" | "misplaced" }[] {
  if (!guess) return [];

  return guess.split("").map((letter, i) => {
    if (correct.includes(letter)) {
      if (letter === correct[i]) {
        return { letter, status: "correct" };
      }

      return { letter, status: "misplaced" };
    } else {
      return { letter, status: "incorrect" };
    }
  });
}
