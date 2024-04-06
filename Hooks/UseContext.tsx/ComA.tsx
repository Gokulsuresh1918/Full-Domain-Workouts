import React, { createContext, useState } from "react";
import Comb from "./Comb";

export const MyContext = createContext<string>('');
const ComA = () => {
  const [data, setdata] = useState("ogkul");
  return (
    <div>
      <h1>{`hii ${data}`}</h1>
      <MyContext.Provider value={data}>
      <Comb />
      </MyContext.Provider >
    </div>
  );
};

export default ComA;
