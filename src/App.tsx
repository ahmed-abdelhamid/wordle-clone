import { Wordle } from "./components/wordle";

function App() {
  return (
    <div className="h-full w-full flex flex-col items-center p-6 space-y-10">
      <h1 className="text-3xl font-bold">Wordle</h1>
      <Wordle />
    </div>
  );
}

export default App;
