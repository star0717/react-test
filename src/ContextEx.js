import React, { createContext, useContext } from "react";

const ThemeContext = createContext("#000");
// 전역변수

const ContextEx = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "100px",
    height: "100px",
    background: theme,
  };
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      <div style={style} />
    </>
  );
};

export default ContextEx;
