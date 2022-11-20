import React from "react";

function ClientDetails({ data }) {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2  gap-0">
        <div className="border-2 border-t-0 border-gray-400 p-2">
          <div className="font-bold font-serif">To:</div>
          <div className="">{data.clientname}</div>
          <div className="">{data.clientaddress}</div>
          <div className="">{data.clientstate}</div>
          <div className="">PinCode:{data.clientpin}</div>
        </div>
        <div className="border-2 border-gray-400 border-t-0 border-l-0 p-2 ">
          <div className="font-bold font-serif">Bank Details:</div>
          <div className="">
            <span className="font-medium">Account Holder's Name:</span>{" "}
            {data.holdername}
          </div>
          <div className="">
            <span className="font-medium">Bank Account Number: </span>
            {data.accnumber}
          </div>
          <div className="">
            <span className="font-medium">IFSC code:</span> {data.IFSC}
          </div>
          <div className="">
            <span className="font-medium">Bank Name:</span> {data.bankname}
          </div>
        </div>
      </div>{" "}
      {/* <section className="mt-5">
        <input type="text" name="text" placeholder="name" required></input>

        <h2 className="text-xl uppercase">client name</h2>
        <p>client Address</p>
      </section> */}
    </div>
  );
}

export default ClientDetails;
