import React, { useEffect, useState } from "react";

const UseState = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    async function fetchdata(): Promise<void> {
      const responce = await fetch("https/bjhgdhdgs");
      const json =await responce.json();
      setcount(json);
    }
    // Clean-up function (optional)
    return () => {
      console.log("Component will unmount.");
    };
  }, [count]);

  function handleClick(): void {
    setcount((prevcount) => prevcount + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseState;
