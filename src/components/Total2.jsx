import React from "react";
import { Textfit } from "react-textfit";

function Total(props) {
  const { sum } = props;

  let tax = (sum * 18) / 100;
  let total = sum + tax;
  return (
    <div className="flex justify-end">
      <div className="my-5  grid grid-cols-2  gap-5  w-2/4 ">
        <div className="flex">
          <div className="font-semibold">TOTAL AMOUNT:</div>
        </div>
        <Textfit
          mode="single"
          forceSingleModeWidth={false}
          className="text-lg  "
          data-testid="sum">
          ${sum}
        </Textfit>

        <div className="flex">
          <div className="font-semibold">TAX (18%): </div>
        </div>
        <Textfit
          mode="single"
          forceSingleModeWidth={false}
          className="text-lg  "
          data-testid="tax">
          ${tax}
        </Textfit>
        <div className="flex">
          <div className="font-semibold">Amount Due: </div>
        </div>
        <Textfit
          mode="single"
          forceSingleModeWidth={false}
          className=" text-lg "
          data-testid="totalt">
          ${total}
        </Textfit>
      </div>
    </div>
  );
}

export default Total;
