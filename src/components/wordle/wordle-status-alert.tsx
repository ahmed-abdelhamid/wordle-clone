import { useContext } from "react";

import { WordleContext } from "@/components/contexts/wordle-context";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const WordleStatusAlert = () => {
  const context = useContext(WordleContext);

  if (context?.status === "won") {
    return (
      <Alert className="border border-green-800 bg-green-800/20 text-green-800 text-center">
        <AlertDescription>
          <strong>Congarulations!</strong> Got it in{" "}
          <strong>{context.guesses.length}</strong>{" "}
          {context.guesses.length === 1 ? "guess" : "guesses"}.
        </AlertDescription>
      </Alert>
    );
  }

  if (context?.status === "lost") {
    return (
      <Alert className="border border-red-800 bg-red-800/20 text-red-800 text-center">
        <AlertDescription>
          <strong>Sorry!</strong> The correct word was{" "}
          <strong>{context.targetWord}</strong>.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
};
