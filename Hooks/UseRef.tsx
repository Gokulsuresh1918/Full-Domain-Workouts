import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (inputRef.current) {
        inputRef.current.value = "hello world";
    }
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseRef;
