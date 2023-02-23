import React from "react";
import { useState, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { FaIndent } from "react-icons/fa";

const Screen = lazy(() => import("../../routes/screen"));
const FormData = lazy(() => import("../../routes/form"));
const Invoice = lazy(() => import("../../routes/invoice/template1"));
const Invoice2 = lazy(() => import("../../routes/invoice/template2"));

function Display() {
  // const [data, setData] = useState({
  //   name: "hrusih",
  //   address: "eehheheheh",
  //   state: "Maharashtra",
  //   city: "Pune",
  //   pin: "411028",
  //   file: null,

  //   holdername: "Trakiot",
  //   accnumber: "411255",
  //   IFSC: "hfhf44",
  //   bankname: "nnfnfnfn",

  //   clientname: "trakiot",
  //   clientaddress: "hthhthth",
  //   clientstate: "jtjtjtjjt",
  //   clientpin: "422515",
  //   invoicenumber: "11451",
  //   invoicedate: "",
  //   capacha: null,

  //   list: [
  //     {
  //       quantity: 4,
  //       description: "dndndn",
  //       price: 5,
  //       total: null,
  //     },
  //   ],
  // });
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
    capacha: null,

    list: [
      {
        quantity: 0,
        description: "",
        price: 0,
        total: null,
      },
    ],
  });

  const [picture, setpicture] = useState(null);

  return (
    <>
      <div className="flex justify-between h-14  fixed w-full bg-slate-300 z-10 ">
        <div className="p-3 flex text-blue-600 xl:pl-56 md:lg:sm:pl-2">
          <div className="lg:xl:text-4xl sm:md:text-2xl p-1">
            <FaIndent />
          </div>
          <div
            className=" xl:lg:text-4xl pl-2 pb-2 md:sm:text-2xl text1 "
            data-testid="text"
          >
            Invoice Builder
          </div>
        </div>
        <div
          className="p-3 text-xl flex italic text-blue-500 xl:pr-56 justify-end sm:md:lg:pr-2  md:sm:text-2xl text2 "
          data-testid="text2"
        >
          Create and Download your Invoice for free Now!!
        </div>
      </div>
      <div className="h-full">
        <Router>
          <Routes>
            <Route
              exact
              path="/templates"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Screen data={data} />
                </Suspense>
              }
            ></Route>

            <Route
              exact
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FormData
                    data={data}
                    setData={setData}
                    picture={picture}
                    setpicture={setpicture}
                    data-testid="fromdata"
                  />
                </Suspense>
              }
            ></Route>

            <Route
              exact
              path="/template1"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Invoice data={data} />
                </Suspense>
              }
            ></Route>

            <Route
              exact
              path="/template2"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Invoice2 data={data} picture={picture} />
                </Suspense>
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default Display;
