import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import { CountContext } from "./Hooks";

const SectionB = () => {
  const { countDispatch } = useContext(CountContext);
  return (
    <div>
      <hr />
      <h3>SectionB</h3>
      <Button
        className="mx-2"
        onClick={() => countDispatch({ type: "increment", payload: 10 })}
      >
        Increase by 10
      </Button>
      <Button
        className="mx-2 btn-danger"
        onClick={() => countDispatch({ type: "decrement", payload: 10 })}
      >
        Decrease by 10
      </Button>
      <Button
        className="mx-2 btn-secondary"
        onClick={() => countDispatch({ type: "reset" })}
      >
        Reset
      </Button>
      <hr />
    </div>
  );
};

export default SectionB;
