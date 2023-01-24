import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div >
      <h2>{count}</h2>
      <div class="grid">
        <Button onClick={() => setCount(count - 1)}>-1</Button>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
      </div>
    </div>
  );
}
