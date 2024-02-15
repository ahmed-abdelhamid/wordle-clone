import { WordForm } from "@/components/wordle/word-form";
import { GuessesList } from "@/components/wordle/guesses-list";

export const Wordle = () => {
  return (
    <div className="space-y-10">
      <GuessesList />
      <WordForm />
    </div>
  );

  // return (
  //   <>
  //     <div className="space-y-4">
  //       {Array.from({ length: 6 }).map((_, i) => (
  //         <Row
  //           key={i}
  //           state={state}
  //           disabled={state.guessNo !== i || isGuessed}
  //           dispatch={dispatch}
  //         />
  //       ))}
  //     </div>
  //     {isGuessed && (
  //       <p className="border rounded-md py-2 px-4 border-green-700 text-green-700 bg-green-700/10">
  //         Congratulations. You guessed the word
  //       </p>
  //     )}
  //   </>
  // );
};
