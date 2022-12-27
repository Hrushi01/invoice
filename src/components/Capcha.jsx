import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@mui/material";
import { FaRedo } from "react-icons/fa";

function Capcha(props) {
  const { check, setCheck } = props;
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [ans, setAns] = useState();
  console.log(ans);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const allAns = useMemo(
    () => [
      randomNumberInRange(100, 999),
      randomNumberInRange(100, 999),
      num1 + num2,
      randomNumberInRange(100, 999),
    ],
    [num1, num2]
  );

  useEffect(() => {
    setNum1(randomNumberInRange(1, 99));
  }, [allAns]);
  useEffect(() => {
    setNum2(randomNumberInRange(1, 99));
  }, []);

  return (
    <div>
      <div className=" flex flex-col justify-start pl-3 font-bold font-sans text-xl text-gray-800  mt-12">
        <div>CAPTCHA:</div>
        <div className="bg-slate-50 shadow   font-sans rounded-xl  m-2  font-bold text-xl">
          <div
            className={
              check
                ? " border-green-300 border-2 p-5 rounded-xl"
                : check === false
                ? " border-red-300 border-2 p-5 rounded-xl"
                : "  font-bold text-xl p-5 rounded-xl"
            }>
            <div className="  ">
              What is {num1}&nbsp; +&nbsp;
              {num2}&nbsp;= ?
            </div>
            <div className="justify-center text-center flex">
              <div className="grid grid-cols-2 w-1/2 ">
                {allAns.map((item, index) => {
                  return (
                    <div key={index}>
                      <button
                        type="button"
                        className={
                          ans === item
                            ? "w-20 border-2 border-blue-400 hover:bg-blue-200 m-1 p-1 bg-blue-200  "
                            : "w-20 border-2 border-blue-400 hover:bg-blue-200 m-1 p-1 font-normal"
                        }
                        onClick={() => {
                          setAns(item);
                        }}>
                        {item}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end">
          <div
            className={
              check
                ? "flex justify-around px-6 border-green-300 border-2 rounded-xl bg-slate-100 shadow p-2 text-lg font-serif font-semibold m-2 w-2/3"
                : check === false
                ? "flex justify-around px-6 border-red-300 border-2  rounded-xl bg-slate-100 shadow p-2 text-lg font-serif font-semibold m-2 w-2/3"
                : " flex justify-around px-6 rounded-xl bg-slate-100 shadow p-2 text-lg font-serif font-semibold m-2 w-2/3"
            }
            //  className=" "
          >
            <Button
              variant="contained"
              onClick={() => {
                if (ans === num1 + num2) {
                  setCheck(true);
                } else {
                  setCheck(false);
                }
              }}>
              Verify
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setAns(null);
                setCheck(null);
              }}>
              <FaRedo />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capcha;
