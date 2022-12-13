import React, { useState, useEffect } from "react";

const Counter = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  // e = event
  //   const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("complete rendering");
    console.log({
      name,
      nickname,
    });
  });

  return (
    // 무조건 빈태그로 감싸야됨
    <>
      {/* <h1>현재 카운터 값은 [ {value} ]입니다</h1>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button> */}
      {/* commit test */}
      <h1>Hello Byeol :)</h1>
      <div>
        <input placeholder="name" value={name} onChange={onChangeName}></input>
        <input
          placeholder="nickname"
          value={nickname}
          onChange={onChangeNickname}
        ></input>
      </div>
    </>
  );
};

export default Counter;
