import React from "react";
import { useState } from "react";

import FormData from "./form/FormData";
import Invoice from "./invoice/Invoice";

function Display() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [data, setData] = useState({
    title: "",
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

    itemdes: "",

    list: [
      {
        quantity: "",
        description: "",
        price: "",
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
    <div>
      {showInvoice ? (
        <Invoice setShowInvoice={setShowInvoice} data={data} />
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
  );
}

export default Display;
