import React from "react";
import ContextEx from "./ContextEx";
import EffectEx from "./EffectEx";
import ReducerEx from "./ReducerEx";
import StateEx from "./StateEx";

const App = () => {
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      <StateEx />
      <EffectEx />
      <ContextEx />
      <ReducerEx />
    </>
  );
};

export default App;
