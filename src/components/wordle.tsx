import { useContext, useReducer } from "react";

import { Row } from "./row";
import { State, letterReducer } from "../reducers/letters-reducer";
import { WordleContext } from "./contexts/wordle-context";

const initialState: State = { letters: ["", "", "", "", ""], guessNo: 0 };

const WORD = "table";

export const Wordle = () => {
  const context = useContext(WordleContext);
  console.log(context);
  const [state, dispatch] = useReducer(letterReducer, initialState);
  const isGuessed = state.letters.join("") === WORD;

  return (
    <>
      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <Row
            key={i}
            state={state}
            disabled={state.guessNo !== i || isGuessed}
            dispatch={dispatch}
          />
        ))}
      </div>
      {isGuessed && (
        <p className="border rounded-md py-2 px-4 border-green-700 text-green-700 bg-green-700/10">
          Congratulations. You guessed the word
        </p>
      )}
    </>
  );
};
