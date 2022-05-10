import { React, useState, createContext, useReducer } from "react";
import { Button } from "react-bootstrap";
import SectionA from "./components/SectionA";
import SectionB from "./components/SectionB";

export const CountContext = createContext();

const countReducer = (state, { type = "default", payload = 1 }) => {
  switch (type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;
    case "reset":
      return initialState;
    case "init":
      return payload;
    default:
      return state;
  }
};

const initialState = 0;

function App() {
  const [mode, setMode] = useState("Light");
  const [inputVal, setInputVal] = useState(0);
  const [state, countDispatch] = useReducer(countReducer, initialState);
  const darkMode = {
    backgroundColor: "black",
    color: "white",
  };

  const lightMode = {
    backgroundColor: "white",
    color: "black",
  };

  const style = mode === "Dark" ? lightMode : darkMode;

  return (
    <CountContext.Provider value={{ state, countDispatch }}>
      <div style={style}>
        <Button
          className="px-5 mx-5 my-5"
          value={mode}
          onClick={(e) =>
            e.target.value === "Light" ? setMode("Dark") : setMode("Light")
          }
        >
          {mode}
        </Button>
        <h1>Hello React Hook</h1>
        <hr />
        <h2>Current Counter Value is : {state}</h2>
        <form>
          <input
            type="number"
            value={inputVal}
            className="mx-3"
            onChange={(e) => setInputVal(e.target.value)}
          />
          <Button
            className="mx-2"
            onClick={() =>
              countDispatch({ type: "init", payload: Number(inputVal) })
            }
          >
            setStartValue
          </Button>
        </form>
        <SectionA />
        <SectionB />
      </div>
    </CountContext.Provider>
  );
}

export default App;
