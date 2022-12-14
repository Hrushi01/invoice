import React from "react";

function ClientDetails({ data }) {
  return (
    <div className="mt-5 h-full">
      <div className="grid grid-cols-2  gap-0">
        <div className="border-2 border-t-0 border-gray-400 p-2">
          <div className="font-bold font-serif">To:</div>
          <div data-testid="clientname">{data.clientname}</div>
          <div data-testid="clientadd">{data.clientaddress}</div>
          <div data-testid="clientstate">{data.clientstate}</div>
          <div data-testid="clientpin">PinCode:{data.clientpin}</div>
        </div>
        <div className="border-2 border-gray-400 border-t-0 border-l-0 p-2 ">
          <div className="font-bold font-serif">Bank Details:</div>
          <div data-testid="acc-hname">
            <span className="font-medium">Account Holder's Name:</span>{" "}
            {data.holdername}
          </div>
          <div data-testid="accnumber">
            <span className="font-medium">Bank Account Number: </span>
            {data.accnumber}
          </div>
          <div data-testid="ifsc">
            <span className="font-medium uppercase">IFSC code:</span>{" "}
            {data.IFSC.toUpperCase()}
          </div>
          <div data-testid="bankname">
            <span className="font-medium uppercase">Bank Name:</span>{" "}
            {data.bankname.toUpperCase()}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default ClientDetails;
