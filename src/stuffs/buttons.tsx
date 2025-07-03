import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}
type Props = {
    count: number;
    onClick: () => void;
}
function MyButton({ count, onClick }: Props) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}