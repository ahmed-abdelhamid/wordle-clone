import { describe, it, expect, beforeEach } from "vitest";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Wordle } from "@/components/wordle";
import {
  MAX_GUESSES,
  WordleProvider,
} from "@/components/providers/wordle-provider";

describe("Wordle component", () => {
  beforeEach(() => {
    // Setup a fresh instance of Wordle for each test
    render(
      <WordleProvider targetWord="TABLE">
        <Wordle />
      </WordleProvider>
    );
  });

  it("Initial render and component visibility", () => {
    expect(screen.getByTestId("guess-form")).toBeVisible();
    expect(screen.getByTestId("reset-button")).toBeVisible();
  });

  it("Guess submission and list update", async () => {
    const guessInput = screen.getByTestId("guess-input") as HTMLInputElement;
    const guessForm = screen.getByTestId("guess-form");

    await userEvent.type(guessInput, "words");
    fireEvent.submit(guessForm);

    expect(screen.getAllByTestId("row")[0]).toContainElement(
      screen.getByText("W")
    );

    expect(guessInput.value).toBe("");
    expect(screen.queryByTestId("success")).not.toBeInTheDocument();
    expect(screen.queryByTestId("fail")).not.toBeInTheDocument();
  });

  it("displays winning message upon correct guess", async () => {
    const guessInput = screen.getByTestId("guess-input");
    const guessForm = screen.getByTestId("guess-form");

    await userEvent.type(guessInput, "table");
    fireEvent.submit(guessForm);

    expect(await screen.findByTestId("success")).toBeVisible();
  });

  it("displays losing message when max guesses are reached without a correct guess", async () => {
    const guessInput = screen.getByTestId("guess-input");
    const guessForm = screen.getByTestId("guess-form");

    for (let i = 0; i < MAX_GUESSES; i++) {
      await userEvent.type(guessInput, `fail${i}`);
      fireEvent.submit(guessForm);
    }

    expect(await screen.findByTestId("fail")).toBeVisible();
  });

  it("Reset functionality", async () => {
    await userEvent.type(screen.getByTestId("guess-input"), "words");
    fireEvent.submit(screen.getByTestId("guess-form"));

    fireEvent.click(screen.getByTestId("reset-button"));

    expect(screen.getAllByTestId("row")[0]).not.toContainElement(
      screen.queryByText("W")
    );

    expect(screen.getByTestId("guess-input")).toBeEnabled();
    expect((screen.getByTestId("guess-input") as HTMLInputElement).value).toBe(
      ""
    );
  });

  it("prevents submission of invalid guesses", async () => {
    const guessInput = screen.getByTestId("guess-input");
    const guessForm = screen.getByTestId("guess-form");

    await userEvent.type(guessInput, "123");
    fireEvent.submit(guessForm);

    expect(screen.getAllByTestId("row")[0]).not.toContainElement(
      screen.queryByText("1")
    );
  });
});
