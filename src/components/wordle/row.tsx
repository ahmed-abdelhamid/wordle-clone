import { checkGuess, cn } from "@/lib/utils";

import { TARGET_WORD } from "@/components/providers/wordle-provider";

interface RowProps {
  guess?: string;
}

export const Row = ({ guess }: RowProps) => {
  const lettersStatus = checkGuess(TARGET_WORD, guess);

  return (
    <div className="flex space-x-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={cn(
            "w-20 h-20 shrink-0 inline-flex items-center justify-center p-4 text-4xl text-white border-foreground/20 border-2 rounded-lg",
            {
              "bg-[#167744]": lettersStatus?.[i]?.status === "correct",
              "bg-[#8D7501]": lettersStatus?.[i]?.status === "misplaced",
              "bg-[#383838]": lettersStatus?.[i]?.status === "incorrect",
            }
          )}
        >
          {guess?.[i]}
        </span>
      ))}
    </div>
  );
};
