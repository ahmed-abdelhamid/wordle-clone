import { useContext } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";
import { Row } from "@/components/wordle/row";
import { MAX_GUESSES } from "@/components/providers/wordle-provider";

export const GuessesList = () => {
  const context = useContext(WordleContext);

  return (
    <div className="space-y-4">
      {Array.from({ length: MAX_GUESSES }).map((_, i) => (
        <Row key={i} guess={context?.guesses[i]} />
      ))}
    </div>
  );
};
