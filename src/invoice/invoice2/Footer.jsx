import React from "react";

function Footer(props) {
  const { data } = props;
  return (
    <>
      <div className="border-b-8 border-black pb-16">
        <div className="text-gray-600 font-serif text-sm  ">
          <div className="">{data.holdername}</div>
          <div className="">{data.bankname}</div>
          <div className="">Account No:{data.accnumber}</div>
        </div>
      </div>
      <div className="font-semibold font-serif text-2xl flex-col pt-5">
        <div className="flex justify-end pr-2">Thank you</div>
        <div className="flex justify-end ">very much!</div>
      </div>
    </>
  );
}

export default Footer;
