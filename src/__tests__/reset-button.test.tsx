import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import {
  IWordleContext,
  WordleContext,
} from "@/components/contexts/wordle-context";
import { ResetButton } from "@/components/wordle/reset-button";

const mockReset = vi.fn();

const mockContext: IWordleContext = {
  guesses: [],
  currentGuess: "",
  targetWord: "TABLE",
  maxGuesses: 6,
  status: "playing",
  setCurrentGuess: vi.fn(),
  addGuess: vi.fn(),
  reset: mockReset,
};

const MockProvider = ({ children }: { children: React.ReactNode }) => (
  <WordleContext.Provider value={mockContext}>
    {children}
  </WordleContext.Provider>
);

describe("WordForm component", () => {
  it("calls the reset function on button click", () => {
    render(
      <MockProvider>
        <ResetButton />
      </MockProvider>
    );

    const resetButton = screen.getByTestId("reset-button");
    fireEvent.click(resetButton);

    expect(mockReset).toHaveBeenCalledTimes(1);
  });
});
