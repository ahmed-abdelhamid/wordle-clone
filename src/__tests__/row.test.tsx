import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";

import { Row } from "@/components/wordle/row";
import * as Utils from "@/lib/utils";

vi.mock("@/lib/utils", async (importOriginal) => {
  const actual = (await importOriginal()) as object;
  return {
    ...actual,
    checkGuess: vi.fn(),
  };
});

const TARGET_WORD = "TABLE";
const CORRECT_CLASS = "bg-[#167744]";
const INCORRECT_CLASS = "bg-[#383838]";
const MISPLACED_CLASS = "bg-[#8D7501]";

describe("Row component", () => {
  it("renders correct guess with green background", () => {
    vi.mocked(Utils.checkGuess).mockReturnValue([
      { letter: "T", status: "correct" },
      { letter: "A", status: "correct" },
      { letter: "B", status: "correct" },
      { letter: "L", status: "correct" },
      { letter: "E", status: "correct" },
    ]);

    render(<Row guess={TARGET_WORD} />);

    // Expect all letters to have a green background
    const letters = screen.getAllByText(/[A-Z]/i);
    letters.forEach((letter) => {
      expect(letter).toHaveClass(CORRECT_CLASS);
    });
  });

  it("renders mixed statuses for guess letters correctly", () => {
    vi.mocked(Utils.checkGuess).mockReturnValue([
      { letter: "W", status: "correct" },
      { letter: "O", status: "misplaced" },
      { letter: "R", status: "incorrect" },
      { letter: "D", status: "incorrect" },
      { letter: "S", status: "misplaced" },
    ]);

    render(<Row guess="WORDS" />);
    expect(screen.getByText("W")).toHaveClass(CORRECT_CLASS);
    expect(screen.getByText("O")).toHaveClass(MISPLACED_CLASS);
    expect(screen.getByText("R")).toHaveClass(INCORRECT_CLASS);
  });

  it("renders correctly when no guess is provided", () => {
    render(<Row />);
    // Verify that the component renders without showing any letters
    const boxes = screen.getAllByTestId("letter");
    expect(boxes.length).toBe(5);
    boxes.forEach((box) => {
      expect(box).toHaveTextContent("");
    });
  });
});
