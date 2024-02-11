import { useReducer } from "react";

import { Row } from "./row";
import { letterReducer } from "../reducers/letters-reducer";

const initialState = { letters: ["", "", "", "", ""] };

export const Wordle = () => {
  const [state, dispatch] = useReducer(letterReducer, initialState);

  return (
    <div className="space-y-4">
      <Row state={state} />
      <Row state={state} />
      <Row state={state} />
      <Row state={state} />
      <Row state={state} />
      <Row state={state} />
    </div>
  );
};
