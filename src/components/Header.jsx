import React from "react";

function Header({ handelprint, data }) {
  return (
    <>
      <header className=" flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between h-full">
        <div>
          <h2 className="text-xl  font-bold">{data.name}</h2>
        </div>
        <div>
          <h1 className="font-bold uppercase text-4xl mb-3 text-gray-500">
            Invoice
          </h1>
        </div>
      </header>
    </>
  );
}

export default Header;
