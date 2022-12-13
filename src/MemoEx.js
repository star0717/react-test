import React,{useMemo, useState} from "react";
const getAverage = numbers => {
  console.log("평균값 계산중");
}

const MemoEx = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');
  return (
    // 무조건 빈태그로 감싸야됨
    <>
      <input value={number}/>
    </>
  );
};

export default MemoEx;
