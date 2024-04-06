import React, { forwardRef, useRef } from "react";

const ChildComp = forwardRef<HTMLInputElement>((props, ref) => {
return (
    <input type="text" ref={ref} />
)
})

const UseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.value = "hello world";
    }
  }
  return (
    <div>
        <ChildComp ref={inputRef}/>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default UseRef;
