import React from "react";

export default function Hello(props) {
  let total = props.num1 + props.num2;
  return (
    <div>
      Hello {props.name}, age is {props.age}. Total: {total}
    </div>
  );
}
