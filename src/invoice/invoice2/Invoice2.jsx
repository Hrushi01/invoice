import React from "react";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { FaArrowLeft } from "react-icons/fa";
import Total from "./Total";
import Footer from "./Footer";
import Table2 from "../../components/Table2";
import { useNavigate } from "react-router-dom";

function Invoice2(props) {
  const { data } = props;
  const navigate = useNavigate();

  const [pic, setpic] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(data.file);
  reader.onload = () => {
    setpic(reader.result);
  };

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

          <div className="p-5 flex justify-between border-b-8 border-black ">
            <div className="flex text-4xl  ">
              <div
                className="profile w-20 bg-slate-400 h-20 rounded-full overflow-hidden  bg-cover pr-1"
                style={{
                  backgroundImage: `url(${pic})`,
                }}></div>{" "}
              <div className="font-hmedium w-60 font-serif text-gray-600 ">
                {data.name}
              </div>
            </div>
            <div className="text-gray-600 text-sm font-serif ">
              <div className="flex justify-end">{data.address}</div>
              <div className="flex justify-end">{data.state}</div>
              <div className="flex justify-end">Pincode-{data.pin}</div>
            </div>
          </div>

          {/* Invoice date  */}
          {/* Invoice date  */}
          {/* Invoice date  */}
          {/* Invoice date  */}

          <div className="text-gray-700 mt-10 ">
            <span className="text-3xl">I</span>
            <span className="text-2xl">NVOICE:</span>
            <span className="font-semibold text-2xl">
              {" "}
              #{data.invoicenumber}
            </span>
          </div>
          <div>
            <span className="text-lg">D</span>
            <span className="text-xs">ATE ISSUED:</span>
            <span className="font-semibold"> {data.invoicedate}</span>
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
