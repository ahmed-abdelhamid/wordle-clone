import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { WordleContext } from "@/components/contexts/wordle-context";

export const ResetButton = () => {
  const context = useContext(WordleContext);

  return (
    <Button
      size="lg"
      variant="secondary"
      className="w-full"
      onClick={context?.reset}
    >
      Reset
    </Button>
  );
};
