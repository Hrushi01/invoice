import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function SetOfButtons({ navigate, handelprint }) {
  return (
    <div>
      <div className=" flex   xl:max-w-4xl xl:mx-auto  xl:pl-80 absolute  sm:text-base sm:pl-5   ">
        <button
          data-testid="back-button"
          onClick={() => navigate("/templates")}
          className=" bg-blue-600 w-24 text-white rounded mr-5 m-3 p-2 bottom-4 flex justify-center items-center "
        >
          <FaArrowLeft className=" " /> &nbsp; Back
        </button>
        <button
          onClick={() => navigate("/")}
          className=" bg-blue-600 text-white rounded mr-5 m-3 p-2 bottom-4 "
        >
          Edit details
        </button>
        <button
          data-testid="print-invoice-button"
          onClick={handelprint}
          className=" bg-blue-600 text-white rounded p-2 m-3 bottom-4 "
        >
          Print Invoice{" "}
        </button>
      </div>
    </div>
  );
}

export default SetOfButtons;
