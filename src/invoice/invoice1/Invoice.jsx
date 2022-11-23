import React from "react";

import Table from "../../components/Table";
import ClientDetails from "../../components/ClientDetails";
import Address from "../../components/Address";
import Header from "../../components/Header";

import TotalAmt from "../../components/TotalAmt";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

function Invoice(props) {
  const { data } = props;
  const navigate = useNavigate();

  const componentRef = useRef();
  const [sum, setSum] = useState();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className=" relative pt-16 ">
      <main
        className="m-5 mt-0 mb-0 pt-10  p-5 xl:max-w-4xl xl:mx-auto  bg-white rounded shadow"
        ref={componentRef}>
        <Header handelprint={handelprint} data={data} />

        <Address data={data} />

        <ClientDetails data={data} />

        <Table data={data} sum={sum} setSum={setSum} />
        <TotalAmt data={data} sum={sum} />
      </main>
      <div className="    xl:max-w-4xl xl:mx-auto  pl-80 absolute     ">
        <button
          onClick={() => navigate("/")}
          className=" bg-blue-600 text-white rounded mr-5 m-3 p-2 bottom-4 ">
          Edit details
        </button>
        <button
          onClick={handelprint}
          className=" bg-blue-600 text-white rounded p-2 bottom-4 ">
          Print/Download
        </button>
      </div>
    </div>
  );
}

export default Invoice;
