import React from "react";

function Total(props) {
  const { sum } = props;

  let tax = (sum * 18) / 100;
  let total = sum + tax;
  return (
    <div>
      <div className="my-5  flex flex-col items-end justify-end mr-20">
        <div className="flex">
          <div className="font-semibold">TOTAL AMOUNT:</div> &nbsp;
          <div className="w-24 flex items-end justify-end ">${sum}</div>
        </div>
        <div className="flex">
          <span className="font-semibold">TAX (18%): </span> &nbsp; &nbsp;
          <div className=" w-24 flex items-end justify-end ">${tax}</div>
        </div>
        <div className="flex">
          <span className="font-semibold">Amount Due: </span> &nbsp; &nbsp;
          <div className=" w-24 flex items-end justify-end ">${total}</div>
        </div>
      </div>
    </div>
  );
}

export default Total;
