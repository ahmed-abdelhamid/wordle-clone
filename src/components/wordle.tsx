import { WordForm } from "@/components/wordle/word-form";
import { GuessesList } from "@/components/wordle/guesses-list";

export const Wordle = () => {
  return (
    <div className="space-y-10">
      <GuessesList />
      <WordForm />
    </div>
  );
};
