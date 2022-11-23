import React from "react";
import { Link } from "react-router-dom";
import template1 from "../images/template1.png";
import template2 from "../images/template2.png";

function Screen(props) {
  return (
    <div className=" p-5 pt-16">
      <div className="flex justify-center font-semibold italic text-2xl">
        Choose Your Template!!
      </div>
      <div className="flex p-5 ">
        <Link to="/template1">
          <img
            src={template1}
            alt="img"
            width="200"
            height="200"
            className="p-5 hover:opacity-60"
          />
        </Link>
        <Link to="/template2" className="h-80">
          <img
            src={template2}
            alt="img"
            height="200"
            width="300"
            className="p-5 hover:opacity-60 object-fill"
          />
        </Link>
        <Link to="/template1">
          <img
            src={template1}
            alt="img"
            width="200"
            height="200"
            className="p-5 hover:opacity-60"
          />
        </Link>
        <Link to="/template2" className="h-80">
          <img
            src={template2}
            alt="img"
            height="200"
            width="300"
            className="p-5 hover:opacity-60 object-fill"
          />
        </Link>
      </div>
    </div>
  );
}

export default Screen;
