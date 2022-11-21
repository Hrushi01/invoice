import React from "react";
import { useState } from "react";

import FormData from "./form/FormData";
import Invoice from "./invoice/Invoice";
import { FaIndent } from "react-icons/fa";
import Invoice2 from "./invoice/Invoice2";

function Display() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [data, setData] = useState({
    title: "",
    name: "Hruhsikesh Ambike",
    address: "b1-101,swapnapruri",
    state: "Maharasgtra",
    city: "Pune",
    pin: "411028",

    holdername: "Hrushikesh",
    accnumber: "454846",
    IFSC: "ss555",
    bankname: "Hadapsar",

    clientname: "Ankit ojha",
    clientaddress: "b!1-191,silvr sitod",
    clientstate: "Maharashtra",
    clientpin: "411028",
    invoicenumber: "55155",
    invoicedate: "12-12-2005",

    list: [
      {
        quantity: "5",
        description: "sjjsjs",
        price: "458",
        total: null,
      },
      {
        quantity: "5",
        description: "sjjsjs",
        price: "458",
        total: null,
      },
      {
        quantity: "5",
        description: "sjjsjs",
        price: "458",
        total: null,
      },
      {
        quantity: "5",
        description: "sjjsjs",
        price: "458",
        total: null,
      },
    ],
  });
  const [list, setList] = useState([
    {
      quantity: "30",
      description: "Some descrip",
      price: "50",
      total: null,
    },
  ]);

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
            list={list}
            setList={setList}
          />
        )}
      </div>
    </>
  );
}

export default Display;
