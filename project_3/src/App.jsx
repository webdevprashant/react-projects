import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

export default function App() {
  const [IsGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
      setIsGameStarted((prev) => !prev);
  }

  return <>
           {  IsGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />  }
        </>;
}