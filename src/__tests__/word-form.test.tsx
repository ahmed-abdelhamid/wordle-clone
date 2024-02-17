import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";

import {
  IWordleContext,
  WordleContext,
} from "@/components/contexts/wordle-context";
import { WordForm } from "@/components/wordle/word-form";

const mockSetCurrentGuess = vi.fn();
const mockAddGuess = vi.fn();

const mockContext: IWordleContext = {
  guesses: [],
  currentGuess: "",
  targetWord: "TABLE",
  maxGuesses: 6,
  status: "playing",
  setCurrentGuess: mockSetCurrentGuess,
  addGuess: mockAddGuess,
  reset: vi.fn(),
};

const MockProvider = ({ children }: { children: React.ReactNode }) => (
  <WordleContext.Provider value={mockContext}>
    {children}
  </WordleContext.Provider>
);

describe("WordForm component", () => {
  it("updates current guess on input change", () => {
    render(
      <MockProvider>
        <WordForm />
      </MockProvider>
    );

    const inputElement = screen.getByTestId("guess-input");
    fireEvent.change(inputElement, { target: { value: "words" } });

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("words");
  });

  it("submits the form and adds a guess", () => {
    mockContext.currentGuess = "words";

    render(
      <MockProvider>
        <WordForm />
      </MockProvider>
    );

    const formElement = screen.getByTestId("guess-form");
    fireEvent.submit(formElement);

    expect(mockAddGuess).toHaveBeenCalledWith("words");
  });

  it('disables input when the game status is not "playing"', () => {
    mockContext.status = "lost";

    render(
      <MockProvider>
        <WordForm />
      </MockProvider>
    );

    const inputElement = screen.getByTestId("guess-input");
    expect(inputElement).toBeDisabled();
  });
});
