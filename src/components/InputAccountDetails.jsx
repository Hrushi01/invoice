import React from "react";
import { Field } from "formik";

function InputAccountDetails({ props }) {
  return (
    <div>
      <div>
        <label className="flex justify-start pl-3 font-bold font-sans text-xl text-gray-800 mt-4">
          Account Details:
        </label>

        <div className="  grid md:grid-cols-2  gap-5 gap-y-3  p-2 sm:grid-cols-1  ">
          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              Account Holder Name:
            </label>

            <Field
              type="text"
              label="holdername"
              name="holdername"
              placeholder="Account holder name"
              className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
            />
            <div
              className="flex justify-left pl-3"
              data-testid="holdername-error-message"
            >
              {props.errors.holdername && props.touched.holdername ? (
                <p className="  text-red-600">{props.errors.holdername}</p>
              ) : null}
            </div>
          </div>
          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              Bank Account Number:
            </label>

            <Field
              type="number"
              label="AccountNo"
              name="accnumber"
              placeholder="Enter account number"
              className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
            />
            <div
              className="flex justify-left pl-3"
              data-testid="accnumber-error-message"
            >
              {props.errors.accnumber && props.touched.accnumber ? (
                <p className="  text-red-600">{props.errors.accnumber}</p>
              ) : null}
            </div>
          </div>
          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              Bank IFSC code:
            </label>

            <Field
              type="text"
              label="IFSC"
              name="IFSC"
              placeholder="Enter bank IFSC code"
              className="  p-2 m-1 w-full uppercase  rounded border-2  border-blue-200"
            />
            <div
              className="flex justify-left pl-3"
              data-testid="IFSC-error-message"
            >
              {props.errors.IFSC && props.touched.IFSC ? (
                <p className="  text-red-600">{props.errors.IFSC}</p>
              ) : null}
            </div>
          </div>
          <div className="   ">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              Bank Name:
            </label>

            <Field
              type="text"
              label="BankName"
              name="bankname"
              placeholder="Enter bank name"
              className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
            />
            <div
              className="flex justify-left pl-3"
              data-testid="bankname-error-message"
            >
              {props.errors.bankname && props.touched.bankname ? (
                <p className="  text-red-600">{props.errors.bankname}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputAccountDetails;
