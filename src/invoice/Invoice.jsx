import React from "react";

import Table from "../components/Table";
import ClientDetails from "../components/ClientDetails";
import Address from "../components/Address";
import Header from "../components/Header";

import TotalAmt from "../components/TotalAmt";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";

function Invoice(props) {
  const { data, setShowInvoice } = props;
  const componentRef = useRef();
  const [sum, setSum] = useState();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <main
        className="m-5 mb-1 p-5 xl:max-w-4xl xl:mx-auto  bg-white rounded shadow"
        ref={componentRef}>
        <Header handelprint={handelprint} data={data} />

        <Address data={data} />

        <ClientDetails data={data} />

        <Table data={data} sum={sum} setSum={setSum} />
        <TotalAmt data={data} sum={sum} />
        {/* <Dates /> */}

        {/* <Notes /> */}
        {/* <Footer /> */}
      </main>
      <div className=" xl:max-w-md xl:mx-auto flex justify-around  ">
        <button
          onClick={() => setShowInvoice(false)}
          className=" bg-blue-600 text-white rounded p-2 bottom-4 ">
          Edit details
        </button>
        <button
          onClick={handelprint}
          className=" bg-blue-600 text-white rounded p-2 bottom-4 ">
          Print Invoice{" "}
        </button>
      </div>
    </div>
  );
}

export default Invoice;
