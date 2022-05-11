import { React, useContext } from "react";
import { Button } from "react-bootstrap";
import { CountContext } from "./Hooks";

const SectionA = () => {
  const { countDispatch } = useContext(CountContext);

  return (
    <div>
      <hr />
      <h3>SectionA</h3>
      <Button
        className="mx-2"
        onClick={() => countDispatch({ type: "increment", payload: 5 })}
      >
        Increase by 5
      </Button>
      <Button
        className="btn-danger"
        onClick={() => countDispatch({ type: "decrement", payload: 5 })}
      >
        Decrease by 5
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

export default SectionA;
