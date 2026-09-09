import { useState } from "react";

const CounterView = ({label, count, onClickFunc}) => {
  console.log('CounterView 실행');

  return (
    <button onClick={onClickFunc}>{label} {count}</button>
  );
};

const LiftedPanel = () => {
  console.log('LiftedPanel 실행');

  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <div>
      <CounterView
        label='A'
        count={countA}
        onClick={() => {setCountA(countA + 1)}}
      />
      <CounterView
        label='B'
        count={countB}
        onClick={() => {setCountB(countB + 1)}}
      />
    </div>
  );
};

export default LiftedPanel;