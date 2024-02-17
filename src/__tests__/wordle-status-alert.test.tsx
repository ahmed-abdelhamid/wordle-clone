import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import {
  IWordleContext,
  WordleContext,
} from "@/components/contexts/wordle-context";
import { WordleStatusAlert } from "@/components/wordle/wordle-status-alert";

const mockContext: IWordleContext = {
  guesses: [],
  currentGuess: "",
  targetWord: "TABLE",
  maxGuesses: 6,
  status: "playing",
  setCurrentGuess: vi.fn(),
  addGuess: vi.fn(),
  reset: vi.fn(),
};

const renderWithWordleContext = (contextValue: IWordleContext) => {
  return render(
    <WordleContext.Provider value={contextValue}>
      <WordleStatusAlert />
    </WordleContext.Provider>
  );
};

describe("WordleStatusAlert component", () => {
  it("displays the winning alert correctly", () => {
    const contextValue = {
      status: "won" as const,
      guesses: ["WORDS", "TABLE"],
    };
    renderWithWordleContext({ ...mockContext, ...contextValue });

    expect(screen.getByText(/congarulations!/i)).toBeInTheDocument();
    expect(screen.getByTestId("success")).toHaveTextContent("2");
  });

  it("displays the losing alert correctly", () => {
    const contextValue = { status: "lost" as const, targetWord: "TABLE" };
    renderWithWordleContext({ ...mockContext, ...contextValue });

    expect(screen.getByText(/sorry!/i)).toBeInTheDocument();
    expect(screen.getByTestId("fail")).toHaveTextContent("TABLE");
  });

  it('does not display an alert when the game status is "playing"', () => {
    const contextValue = { status: "playing" as const };
    renderWithWordleContext({ ...mockContext, ...contextValue });

    expect(screen.queryByText(/congarulations!/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/sorry!/i)).not.toBeInTheDocument();
  });
});
