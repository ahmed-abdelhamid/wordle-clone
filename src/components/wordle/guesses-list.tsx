import { useContext } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";

export const GuessesList = () => {
  const context = useContext(WordleContext);

  return (
    <div>
      {context?.guesses.map((guess, i) => (
        <p key={i}>{guess}</p>
      ))}
    </div>
  );
};
