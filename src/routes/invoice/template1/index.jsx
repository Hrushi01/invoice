import React from "react";

import Table from "../../../components/Table";
import ClientDetails from "../../../components/ClientDetails";
import Address from "../../../components/Address";
import Header from "../../../components/Header";

import TotalAmt from "../../../components/TotalAmt";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router";
import SetOfButtons from "../../../components/SetOfButtons";

function Invoice(props) {
  const { data } = props;
  const navigate = useNavigate();

  const componentRef = useRef();
  const [sum, setSum] = useState();

  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className=" relative pt-16 h-full ">
      <main
        className="m-5 mt-0 mb-0 pt-10 h-full  p-5 xl:max-w-4xl xl:mx-auto  bg-white rounded shadow"
        ref={componentRef}
      >
        <Header handelprint={handelprint} data={data} />

        <Address data={data} />

        <ClientDetails data={data} />

        <Table data={data} sum={sum} setSum={setSum} />

        <TotalAmt data={data} sum={sum} />
      </main>
      <SetOfButtons handelprint={handelprint} navigate={navigate} />
    </div>
  );
}

export default Invoice;
