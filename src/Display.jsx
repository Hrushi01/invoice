import React from "react";
import { useState } from "react";

import FormData from "./form/FormData";
import Invoice from "./invoice/invoice1/Invoice";
import { FaIndent } from "react-icons/fa";
import Invoice2 from "./invoice/invoice2/Invoice2";

function Display() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [data, setData] = useState({
    name: "Hrushikesh Ambike",
    address: "b1-101,skskskskss",
    state: "Maharashtra",
    city: "Pune",
    pin: "411028",

    holdername: "hruhsikesh Ambike",
    accnumber: "44554455",
    IFSC: "sbi555",
    bankname: "bank of baroda",

    clientname: "Takiot sol",
    clientaddress: "b1-101,silverstone",
    clientstate: "maharashtra",
    clientpin: "411028",
    invoicenumber: "5151515",
    invoicedate: "12-5-2001",

    list: [
      {
        quantity: "2",
        description: "ddds",
        price: "2",
        total: null,
      },
      {
        quantity: "2",
        description: "ddds",
        price: "2",
        total: null,
      },
      {
        quantity: "2",
        description: "ddds",
        price: "2",
        total: null,
      },
      {
        quantity: "2",
        description: "",
        price: "",
        total: null,
      },
    ],
  });

  return (
    <>
      <div className="flex justify-between  fixed w-full bg-slate-300 z-10">
        <div className="p-3 flex text-blue-600 pl-56">
          <FaIndent className="text-4xl" />
          <div className=" text-2xl pl-2">Invoice Builder</div>
        </div>
        <div className="p-3 text-xl flex italic text-blue-500 pr-56 justify-end   ">
          Create and Download your Invoice for free Now!!
        </div>
      </div>
      <div className="bg-indigo-50 p-12 z-1">
        {showInvoice ? (
          <>
            <div className="grid grid-cols-2  gap-10">
              <Invoice setShowInvoice={setShowInvoice} data={data} />
              <Invoice2 setShowInvoice={setShowInvoice} data={data} />
            </div>
          </>
        ) : (
          // <>Hello/</>
          <FormData
            setShowInvoice={setShowInvoice}
            data={data}
            setData={setData}
          />
        )}
      </div>
    </>
  );
}

export default Display;
