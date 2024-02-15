import {
  TARGET_WORD,
  WordleProvider,
} from "./components/providers/wordle-provider";
import { Wordle } from "./components/wordle";

function App() {
  return (
    <WordleProvider targetWord={TARGET_WORD}>
      <div className="h-full w-full flex flex-col items-center p-6 space-y-10">
        <h1 className="text-3xl font-bold">Wordle</h1>
        <Wordle />
      </div>
    </WordleProvider>
  );
}

export default App;
