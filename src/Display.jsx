import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Screen from "./screen/Screen";

import FormData from "./form/FormData";
import Invoice from "./invoice/invoice1/Invoice";
import { FaIndent } from "react-icons/fa";
import Invoice2 from "./invoice/invoice2/Invoice2";

function Display() {
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
      <div className="flex justify-between h-14  fixed w-full bg-slate-300 z-10">
        <div className="p-3 flex text-blue-600 pl-56">
          <FaIndent className="text-4xl" />
          <div className=" text-2xl pl-2">Invoice Builder</div>
        </div>
        <div className="p-3 text-xl flex italic text-blue-500 pr-56 justify-end   ">
          Create and Download your Invoice for free Now!!
        </div>
      </div>
      <Routes>
        <Route path="/templates" element={<Screen data={data} />}></Route>
        <Route
          path="/"
          element={<FormData data={data} setData={setData} />}></Route>

        <Route path="/template1" element={<Invoice data={data} />}></Route>
        <Route path="/template2" element={<Invoice2 data={data} />}></Route>
      </Routes>
      <div></div>
    </>
  );
}

export default Display;
