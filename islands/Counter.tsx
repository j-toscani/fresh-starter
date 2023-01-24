import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div>
        <Button role="button" onClick={() => setCount(count - 1)}>-1</Button>
      <span style="margin-right: 1rem;">{count}</span>
        <Button role="button" onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
