import type { MetaFunction } from "@remix-run/node";
import { memo, useCallback, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const Suffix = memo(function suffix({
  num,
  handleClick,
}: {
  num: number;
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

export default function Index() {
  const [state, setState] = useState(0);
  const [subComponentState, setSubComponentState] = useState(0);

  const handleIncrementClick = () => {
    setState((prev) => prev + 1);
  };

  // this useCallback is necessary to avoid unnecessary rerenders
  const handleSubComponentClick = useCallback(() => {
    setSubComponentState(subComponentState + 1); // smarter implementation: (prev) => prev + 1
  }, [subComponentState]);

  console.log("Index rendered");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
      <button onClick={handleIncrementClick}>
        Increment state in main method
      </button>
      <div>{state}</div>
      <div>{subComponentState}</div>
      <div>
        <h2>Prefix</h2>
        <Suffix num={subComponentState} handleClick={handleSubComponentClick} />
      </div>
    </div>
  );
}
