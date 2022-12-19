import React from "react";
import { Textfit } from "react-textfit";

function TotalAmt(props) {
  const { sum } = props;

  return (
    <>
      <div className="flex h-full  justify-end mt-3">
        <div className=" grid grid-cols-2  gap-0  w-2/4 ">
          <div className="font-bold flex justify-start items-center">
            SUBTOTAL
          </div>
          <Textfit
            mode="single"
            forceSingleModeWidth={false}
            style={{ height: "100%" }}
            className="border-2  border-gray-400 border-t-0 p-1  "
            data-testid="sum">
            ${sum}
          </Textfit>
          <div className="flex  h-9">
            <div className="h-9  flex justify-center items-center ">TOTAL</div>
            <div className="text-xs pt-1.5 flex justify-center items-center">
              {" "}
              DUE
            </div>
          </div>
          <div className="h-9">
            <Textfit
              mode="single"
              forceSingleModeWidth={false}
              style={{ height: "100%" }}
              className="border-2  border-gray-400 border-t-0 p-1   "
              data-testid="due">
              ${sum}
            </Textfit>
          </div>
        </div>
      </div>
      <div className="flex justify-center font-semibold mt-20 text-xl">
        Thank you!
      </div>
    </>
  );
}

export default TotalAmt;
