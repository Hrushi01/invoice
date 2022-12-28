import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@mui/material";
import { FaRedo } from "react-icons/fa";

function Capcha(props) {
  const { check, setCheck } = props;
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [ans, setAns] = useState();
  const [refresh, setRefresh] = useState(false);
  console.log(ans);
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handelpush = useCallback(() => {
    var ankit = [];
    ankit.push(num1 + num2);
    while (ankit.length < 4) {
      var r = Math.floor(Math.random() * 10) + 1;
      if (ankit.indexOf(r) === -1) ankit.push(r);
    }
    return ankit;
  }, [num1, num2]);

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));

      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  const allAns = useMemo(() => shuffleArray(handelpush()), [handelpush]);

  useEffect(() => {
    setNum1(randomNumberInRange(1, 5));
  }, [refresh]);
  useEffect(() => {
    setNum2(randomNumberInRange(1, 4));
  }, [refresh]);

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
            }>
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
                setRefresh(!refresh);
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
