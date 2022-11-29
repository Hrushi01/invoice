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
    name: "",
    address: "",
    state: "",
    city: "",
    pin: "",
    file: null,

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
      <div className="flex justify-between h-14  fixed w-full bg-slate-300 z-10 ">
        <div className="p-3 flex text-blue-600 xl:pl-56 md:lg:sm:pl-2">
          <div className="lg:xl:text-4xl sm:md:text-2xl p-1">
            <FaIndent />
          </div>
          <div className=" xl:lg:text-4xl pl-2 pb-2 md:sm:text-2xl ">
            Invoice Builder
          </div>
        </div>
        <div className="p-3 text-xl flex italic text-blue-500 xl:pr-56 justify-end sm:md:lg:pr-2  md:sm:text-2xl  ">
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
