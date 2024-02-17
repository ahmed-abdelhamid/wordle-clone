import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import {
  IWordleContext,
  WordleContext,
} from "@/components/contexts/wordle-context";
import { GuessesList } from "@/components/wordle/guesses-list";

const mockContext = {
  guesses: ["WORDS", "TABLE"],
  currentGuess: "",
  targetWord: "TABLE",
  maxGuesses: 6,
  status: "playing",
  setCurrentGuess: vi.fn(),
  addGuess: vi.fn(),
  reset: vi.fn(),
} satisfies IWordleContext;

const MockProvider = ({ children }: { children: React.ReactNode }) => (
  <WordleContext.Provider value={mockContext}>
    {children}
  </WordleContext.Provider>
);

describe("GuessesList component", () => {
  it("renders the correct number of rows", () => {
    render(
      <MockProvider>
        <GuessesList />
      </MockProvider>
    );

    const rowElements = screen.getAllByTestId("row");
    expect(rowElements.length).toBe(mockContext.maxGuesses);
  });
});
