import React, { useReducer } from "react";

// switch=여러개의 if문
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}
// 함수를 설정함

const ReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  //현재 값
  //dispatch는 action을 말함
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      <h1>현재 값은 {state.value} 입니다</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
};
//commit test
//second test
//window test

export default ReducerEx;
