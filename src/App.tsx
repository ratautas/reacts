import "@/assets/style.scss";

import { useReducer } from "react";

import HelloWorld from "@/components/HelloWorld";

export enum ActionTypes {
  DO_STUFF = "DO_STUFF",
}

export type Action = {
  type: string;
  payload?: unknown;
};

export type State = {};

const INITIAL_STATE = {};
const reducer = (state: State, { type, payload }: Action) => {
  return state;
};

const App = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <>
      <HelloWorld />
    </>
  );
};

export default App;
