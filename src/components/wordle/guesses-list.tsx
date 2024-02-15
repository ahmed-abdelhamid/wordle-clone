import { useContext } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";
import { Row } from "@/components/wordle/row";

export const GuessesList = () => {
  const context = useContext(WordleContext);

  return (
    <div className="space-y-4">
      {Array.from({ length: 6 }).map((_, i) => (
        <Row key={i} guess={context?.guesses[i]} />
      ))}
    </div>
  );
};
