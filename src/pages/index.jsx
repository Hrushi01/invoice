import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Screen from "../routes/screen";

import FormData from "../routes/form";
import Invoice from "../routes/invoice/template1";
import { FaIndent } from "react-icons/fa";
import Invoice2 from "../routes/invoice/template2";

function Display() {
  const [data, setData] = useState({
    name: "hrusih",
    address: "eehheheheh",
    state: "Maharashtra",
    city: "Pune",
    pin: "411028",
    file: null,

    holdername: "Trakiot",
    accnumber: "411255",
    IFSC: "hfhf44",
    bankname: "nnfnfnfn",

    clientname: "trakiot",
    clientaddress: "hthhthth",
    clientstate: "jtjtjtjjt",
    clientpin: "422515",
    invoicenumber: "11451",
    invoicedate: "",

    list: [
      {
        quantity: 4,
        description: "dndndn",
        price: 5,
        total: null,
      },
    ],
  });
  // const [data, setData] = useState({
  //   name: "",
  //   address: "",
  //   state: "",
  //   city: "",
  //   pin: "",
  //   file: null,

  //   holdername: "",
  //   accnumber: "",
  //   IFSC: "",
  //   bankname: "",

  //   clientname: "",
  //   clientaddress: "",
  //   clientstate: "",
  //   clientpin: "",
  //   invoicenumber: "",
  //   invoicedate: "",

  //   list: [
  //     {
  //       quantity: "",
  //       description: "",
  //       price: "",
  //     },
  //   ],
  // });
  const [picture, setpicture] = useState(null);

  return (
    <>
      <div className="flex justify-between h-14  fixed w-full bg-slate-300 z-10 ">
        <div className="p-3 flex text-blue-600 xl:pl-56 md:lg:sm:pl-2">
          <div className="lg:xl:text-4xl sm:md:text-2xl p-1">
            <FaIndent />
          </div>
          <div
            className=" xl:lg:text-4xl pl-2 pb-2 md:sm:text-2xl "
            data-testid="text">
            Invoice Builder
          </div>
        </div>
        <div
          className="p-3 text-xl flex italic text-blue-500 xl:pr-56 justify-end sm:md:lg:pr-2  md:sm:text-2xl  "
          data-testid="text2">
          Create and Download your Invoice for free Now!!
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/templates" element={<Screen data={data} />}></Route>

          <Route
            path="/"
            element={
              <FormData
                data={data}
                setData={setData}
                picture={picture}
                setpicture={setpicture}
                data-testid="fromdata"
              />
            }></Route>

          <Route
            path="/template1"
            element={
              // <Router>
              <Invoice data={data} />
              // </Router>
            }></Route>

          <Route
            path="/template2"
            element={<Invoice2 data={data} picture={picture} />}></Route>
        </Routes>
      </Router>
      <div></div>
    </>
  );
}

export default Display;
