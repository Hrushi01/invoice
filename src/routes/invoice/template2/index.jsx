import React from "react";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { FaArrowLeft } from "react-icons/fa";
import Total from "../../../components/Total2";
import Footer from "../../../components/Footer";
import Table2 from "../../../components/Table2";
import { useNavigate } from "react-router";

function Invoice2(props) {
  const { data, picture } = props;
  const navigate = useNavigate();

  const componentRef = useRef();
  const [sum, setSum] = useState("");
  const handelprint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div className="  z-12 pt-16 ">
        <main
          className="m-5 mb-1 mt-0  xl:max-w-4xl xl:mx-auto p-10   bg-white rounded shadow relative"
          ref={componentRef}>
          {/* Header */}
          {/* Header */}
          {/* Header */}
          {/* Header */}
          {/* Header */}

          <div className="p-5 grid  grid-cols-2 border-b-8 border-black items-center ">
            <div className=" text-4xl  flex gap-0  ">
              <div
                className="profile w-24 bg-slate-400 h-24 rounded-full overflow-hidden  bg-cover pr-1"
                style={{
                  backgroundImage: `url(${picture})`,
                }}
                data-testid="logo"></div>{" "}
              <div
                className="font-medium w-60  font-serif text-gray-600  flex justify-center items-center text-center  "
                data-testid="name">
                {data.name}
              </div>
            </div>
            <div className="text-gray-600 text-sm font-serif  ">
              <div className="flex justify-end" data-testid="address">
                {data.address}
              </div>
              <div className="flex justify-end" data-testid="state">
                {data.state}
              </div>
              <div className="flex justify-end" data-testid="pincode">
                Pincode-{data.pin}
              </div>
            </div>
          </div>

          {/* Invoice date  */}
          {/* Invoice date  */}
          {/* Invoice date  */}
          {/* Invoice date  */}

          <div className="text-gray-700 mt-10 ">
            <span className="text-3xl">I</span>
            <span className="text-2xl">NVOICE:</span>
            <span className="font-semibold text-2xl" data-testid="innumber">
              {" "}
              #{data.invoicenumber}
            </span>
          </div>
          <div>
            <span className="text-lg">D</span>
            <span className="text-xs">ATE ISSUED:</span>
            <span className="font-semibold" data-testid="indate">
              {" "}
              {data.invoicedate}
            </span>
          </div>

          {/* Table Below */}
          {/* Table Below */}
          {/* Table Below */}
          {/* Table Below */}
          <Table2 data={data} sum={sum} setSum={setSum} />

          {/* Total Below  */}
          {/* Total Below  */}
          {/* Total Below  */}
          {/* Total Below  */}

          <Total data={data} sum={sum} />
          <Footer data={data} />
        </main>
        <div className=" flex   xl:max-w-4xl xl:mx-auto  xl:pl-80 absolute  sm:text-base sm:pl-5   ">
          <button
            onClick={() => navigate("/templates")}
            className=" bg-blue-600 w-24 text-white rounded mr-5 m-3 p-2 bottom-4 flex justify-center items-center ">
            <FaArrowLeft className=" " /> &nbsp; Back
          </button>
          <button
            onClick={() => navigate("/")}
            className=" bg-blue-600 text-white rounded mr-5 m-3 p-2 bottom-4 ">
            Edit details
          </button>
          <button
            onClick={handelprint}
            className=" bg-blue-600 text-white rounded p-2 m-3 bottom-4 ">
            Print Invoice{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Invoice2;
