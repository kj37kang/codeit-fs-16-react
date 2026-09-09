import { useState } from "react";

const CountA = () => {
  console.log('CountA 실행');

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => {setCount(count + 1)}}>A {count}</button>
  );
};

const CountB = () => {
  console.log('CountB 실행');

  const [count, setCount] = useState(0);

  return (
    <button onClick={() => {setCount(count + 1)}}>B {count}</button>
  );
};

const LabPanel = () => {
  console.log('LabPanel 실행');

  return (
    <div>
      <CountA />
      <CountB />
    </div>
  );
};

export default LabPanel;