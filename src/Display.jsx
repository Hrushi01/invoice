import React from "react";
import { useState } from "react";

import FormData from "./form/FormData";
import Invoice from "./invoice/invoice1/Invoice";
import { FaIndent } from "react-icons/fa";
import Invoice2 from "./invoice/invoice2/Invoice2";

function Display() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [data, setData] = useState({
    name: "",
    address: "",
    state: "",
    city: "",
    pin: "",

    holdername: "",
    accnumber: "",
    IFSC: "",
    bankname: "",

    clientname: "",
    clientaddress: "",
    clientstate: "",
    clientpin: "",
    invoicenumber: "",
    invoicedate: "",

    list: [
      {
        quantity: "",
        description: "",
        price: "",
        total: null,
      },
    ],
  });

  return (
    <>
      <div className="flex justify-between  fixed w-full bg-slate-300">
        <div className="p-3 flex text-blue-600 pl-56">
          <FaIndent className="text-4xl" />
          <div className=" text-2xl pl-2">Invoice Builder</div>
        </div>
        <div className="p-3 text-xl flex italic text-blue-500 pr-56 justify-end   ">
          Create and Download your Invoice for free Now!!
        </div>
      </div>
      <div className="bg-indigo-50 p-12">
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
