import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [toggleMode,setToggleMode] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggleMode ? "App dark" : "App light"

  function toggleModeHandler(){
    setToggleMode(!toggleMode)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleModeHandler}>{toggleMode ? 'Dark ' : 'Light '}Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
