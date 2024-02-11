type State = { letters: string[] };

type Action = { type: "" };

export function letterReducer(state: State, action: Action): State {
  switch (action.type) {
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
