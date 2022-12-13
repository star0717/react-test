import React, { useState, useMemo } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산중");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const MemoEx = () => {
  const [list, setList] = useState([]);

  const [number, setNumber] = useState("");

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = (e) => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };
  // concat = 두개의 문자열을 하나의 문자열로 만들어주는 함수
  // var a = "안녕"
  // var b = "하세요"
  // console.log((a.concat(b)))
  // = 안녕하세요

  // parseInt = 정수화

  const avg = useMemo(() => getAverage(list, [list]));
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      <input
        value={number}
        onChange={onChange}
        type="number"
        placeholder="Only number"
      />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <h2>
          평균 값 : <p>{avg}</p>
        </h2>
      </div>
    </>
  );
};

export default MemoEx;
