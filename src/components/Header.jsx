import React from "react";

function Header({ handelprint, data }) {
  return (
    <div>
      {" "}
      <header className=" flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        <div>
          <h2 className="text-xl  font-bold">{data.name}</h2>
        </div>
        <div>
          <h1 className="font-bold uppercase text-4xl mb-3 text-gray-500">
            Invoice
          </h1>
        </div>
        {/* <ul className="flex items-center justify-between flex-wrap">
          <li>
            <button className="btn btn-print" onClick={handelprint}>
              Print
            </button>
          </li>
          <li>
            <button className="btn btn-download">Download</button>
          </li>
          <li>
            <button className="btn btn-send">Send</button>
          </li>
        </ul> */}
      </header>
    </div>
  );
}

export default Header;
