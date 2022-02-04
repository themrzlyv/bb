import { useRef, useState } from "react";
import "./styles.css";
import Test from "./Test";

export default function App() {
  const [state, setState] = useState<undefined | string>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handlerClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") setState(inputRef.current?.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <input ref={inputRef} onKeyPress={handlerClick} />
      <h2>{state}</h2>
      <Test userId="2" />
    </div>
  );
}
