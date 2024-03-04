import { memo } from "react";

// memo is necessary, otherwise this will always be rerendered
export const Suffix = memo(function suffix({
  options: { subComponentState: num },
  handleClick,
}: {
  options: {
    subComponentState: number;
  };
  handleClick: () => void;
}) {
  console.log("Suffix rendered");
  return (
    <>
      <button onClick={handleClick}>SubComponent state</button>
      <div>Number: {num}</div>
    </>
  );
});
