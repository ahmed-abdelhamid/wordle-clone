export type State = { letters: string[]; guessNo: number };

export type Action = { type: "SET_LETTERS"; payload: { letters: string[] } };

export function letterReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_LETTERS":
      return {
        ...state,
        letters: action.payload.letters,
        guessNo: state.guessNo + 1,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
