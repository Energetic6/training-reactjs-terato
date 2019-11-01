import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function FunctionalComponent() {
  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(prevState => prevState + 1);
  };

  const decrease = () => {
    setNumber(prevState => prevState - 1);
  };

  return (
    <div>
      <h3>Functional Component</h3>
      <div>Number: {number}</div>
      <Button onClick={increase}>Increase</Button>
      <Button variant="danger" onClick={decrease}>
        Decrease
      </Button>
    </div>
  );
}
