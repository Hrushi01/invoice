import React from "react";

function TotalAmt(props) {
  const { sum } = props;

  return (
    <div>
      <div className="my-5  flex flex-col items-end justify-end">
        <div className="flex">
          <div className="font-bold">SUBTOTAL</div> &nbsp;
          <div className="border-2 border-gray-400 border-t-0 w-24 flex items-end justify-end p-2">
            ${sum}
          </div>
        </div>
        <div className="flex">
          <span>TOTAL </span> &nbsp;
          <span className="text-xs pt-1.5"> DUE</span>
          &nbsp;
          <div className="border-2 border-gray-400 border-t-0 w-24 flex items-end justify-end p-2">
            ${sum}
          </div>
        </div>
        <div className="flex">
          <div className="border-2 border-gray-400 border-t-0 w-24 flex items-end justify-end p-2 ">
            <span className="invisible">Invoice</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalAmt;
