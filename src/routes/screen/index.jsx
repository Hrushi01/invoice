import React from "react";
import { Link } from "react-router-dom";
import template1 from "../../assets/images/template1.png";
import template2 from "../../assets/images/template2.png";

function Screen() {
  return (
    <div className=" p-5 flex justify-center flex-col text-center pt-16">
      <div className="flex justify-center font-semibold italic text-2xl mb-5">
        Choose Your Template!!
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-5  justify-center  sm:gap-2 sm:grid-cols-2">
        <Link to="/template1">
          <img
            src={template2}
            alt="img"
            width="200"
            height="200"
            className=" hover:opacity-60 border-1 border-black"
          />
        </Link>
        <Link to="/template2" className="h-80">
          <img
            src={template1}
            alt="img"
            height="200"
            width="200"
            className=" hover:opacity-60 object-fill"
          />
        </Link>
        <Link to="/template1">
          <img
            src={template2}
            alt="img"
            width="200"
            height="200"
            className=" hover:opacity-60"
          />
        </Link>
        <Link to="/template2" className="h-80">
          <img
            src={template1}
            alt="img"
            height="200"
            width="200"
            className=" hover:opacity-60 object-fill"
          />
        </Link>
      </div>
    </div>
  );
}

export default Screen;
