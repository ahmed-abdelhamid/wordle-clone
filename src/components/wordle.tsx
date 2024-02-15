import { WordForm } from "@/components/wordle/word-form";
import { GuessesList } from "@/components/wordle/guesses-list";
import { WordleStatusAlert } from "@/components/wordle/wordle-status-alert";

export const Wordle = () => {
  return (
    <div className="space-y-10">
      <GuessesList />
      <WordForm />
      <WordleStatusAlert />
    </div>
  );
};
