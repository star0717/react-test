import React from "react";
import ContextEx from "./ContextEx";
import EffectEx from "./EffectEx";
import ReducerEx from "./ReducerEx";

const App = () => {
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      {/* <EffectEx /> */}
      {/* <ContextEx /> */}
      <ReducerEx />
    </>
  );
};

export default App;
