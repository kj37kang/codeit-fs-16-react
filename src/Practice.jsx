import { useState } from "react";

const Practice = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button
        onClick={() => setToggle(c => !c)}
      >
        누르면 인삿말이 바뀌어요!
      </button>
      <p>{toggle ? '안녕 세상아!' : 'Hello World!'}</p>
    </>
  );
};

export default Practice;