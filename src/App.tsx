import {
  TARGET_WORD,
  WordleProvider,
} from "@/components/providers/wordle-provider";
import { Wordle } from "@/components/wordle";

function App() {
  return (
    <WordleProvider targetWord={TARGET_WORD}>
      <div className="h-screen w-full p-6 flex flex-col items-center space-y-10">
        <h1 className="text-3xl text-center font-bold">Wordle Game</h1>
        <div className="max-w-lg mx-auto">
          <Wordle />
        </div>
      </div>
    </WordleProvider>
  );
}

export default App;
