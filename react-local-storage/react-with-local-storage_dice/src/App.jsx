import useLocalStorageState from "use-local-storage-state"
import "./App.css";
import History from "./components/History";
import { D6Button } from "./components/D6Button";
import { getD6Roll } from "./utils";
 
export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls");

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  const currentRollValue = rolls[0]?.value;
  console.log("Current Roll Value:", currentRollValue)

  return (
    <div className="app">
      <main className="app__main">
        <D6Button value={currentRollValue} onRoll={handleRoll}/>
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}
