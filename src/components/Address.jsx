import React from "react";

function Address({ data }) {
  return (
    <>
      <div className="flex justify-between">
        <div>
          {" "}
          <section className="flex flex-col  justify-start ">
            {/* <input type="text" name="text" placeholder="name" required></input> */}

            <div>{data.address}</div>
            <div>
              {data.city},{data.state}
            </div>
            <div>Pincode-{data.pin}</div>
          </section>
        </div>
        <div>
          <br />
          <div>
            <span className="text-lg">I</span>
            <span className="text-xs">NVOICE:</span>
            <span className="font-bold"> #{data.invoicenumber}</span>
          </div>
          <div>
            <span className="text-lg">D</span>
            <span className="text-xs">ATE:</span>
            <span className="font-bold"> {data.invoicedate}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
