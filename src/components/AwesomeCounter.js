import { useState } from "react";
const AwesomeCounter = ({ initialvalue }) => {
  const [count, setCount] = useState(initialvalue ?? 0);
  const add = () => {
    setCount((prevcount) => prevcount +1);
  };

  return (
    <div>
      <h1>Awesome Counter</h1>
      <span>{initialvalue ?? 0}</span>
      <button onclick={add}></button>
    </div>
  );
};

export default AwesomeCounter;
