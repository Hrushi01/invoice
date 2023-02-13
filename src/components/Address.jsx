import React from "react";

function Address({ data }) {
  return (
    <>
      <div className="flex justify-between h-full">
        <div>
          <div className="flex flex-col  justify-start ">
            <div data-testid="address">{data.address}</div>
            <div data-testid="citystate">
              {data.city},{data.state}
            </div>
            <div data-testid="pincode">Pincode-{data.pin}</div>
          </div>
        </div>
        <div>
          <br />
          <div>
            <span className="text-lg">I</span>
            <span className="text-xs">NVOICE:</span>
            <span className="font-bold" data-testid="invoice">
              #{data.invoicenumber}
            </span>
          </div>
          <div>
            <span className="text-lg">D</span>
            <span className="text-xs">ATE:</span>
            <span className="font-bold" data-testid="indate">
              {data.invoicedate}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Address;
