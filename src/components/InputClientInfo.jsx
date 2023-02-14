import React from "react";
import { Field, ErrorMessage } from "formik";

function InputClientInfo({ props }) {
  return (
    <>
      <div className="w-5/6 mb-12 mt-5">
        {/* first line  */}
        {/* first line  */}
        {/* first line  */}
        {/* first line  */}
        <div className="  grid grid-cols-1  gap-10  p-2  ">
          <div className="   ">
            <label
              className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
              htmlFor="clientname"
            >
              Client Name:
            </label>

            <Field
              type="text"
              label="clientname"
              name="clientname"
              placeholder="Enter Clientname"
              className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="clientname">
              {props.errors.clientname && props.touched.clientname ? (
                <p className="  text-red-600">{props.errors.clientname}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* invoice details  */}
        {/* invoice details  */}
        {/* invoice details  */}
        {/* invoice details  */}

        <div className="  grid grid-cols-2  gap-10  p-2  sm:gap-1 lg:gap-10 ">
          <div className="   ">
            <label className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600 ">
              Invoice Number:
            </label>

            <Field
              type="number"
              label="invoicenumber"
              name="invoicenumber"
              placeholder="Enter invoicenumber"
              className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="invonumber">
              {props.errors.invoicenumber && props.touched.invoicenumber ? (
                <p className="  text-red-600">{props.errors.invoicenumber}</p>
              ) : null}
            </div>
          </div>

          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600">
              Invoice Date:
            </label>

            <Field
              type="date"
              label="invoicedate"
              data-testid="invoicedate"
              name="invoicedate"
              className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="invodate">
              {props.errors.invoicedate && props.touched.invoicedate ? (
                <p className="  text-red-600">{props.errors.invoicedate}</p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Client Address */}
        {/* Client Address */}
        {/* Client Address */}
        {/* Client Address */}
        {/* Client Address */}

        <div>
          <label className="flex justify-start pl-3 font-bold font-sans text-xl text-gray-800 mt-4">
            Client Address:
          </label>
          <div className="  grid md:grid-cols-1 sm:gap-1  lg:grid-cols-3 lg:gap-10  p-2 sm:grid-cols-2  ">
            <div className="">
              <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
                Flat No,Building,etc:
              </label>

              <Field
                type="text"
                label="address"
                name="clientaddress"
                placeholder="Enter Client address"
                className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
              />
              <div
                className="flex justify-left pl-3 text-red-600"
                data-testid="flatno"
              >
                <ErrorMessage name="clientaddress" />
              </div>
            </div>
            <div className="   ">
              <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
                State:
              </label>

              <Field
                type="text"
                label="clientstate"
                name="clientstate"
                placeholder="Enter clientstate"
                className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
              />
              <div
                className="flex justify-left pl-3 text-red-600"
                data-testid="clientstate"
              >
                <ErrorMessage name="clientstate" />
              </div>
            </div>

            <div className="">
              <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
                PinCode:
              </label>

              <Field
                type="number"
                max="999999"
                label="clientpin"
                name="clientpin"
                placeholder="Enter client pincode"
                className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
              />
              <div
                className="flex justify-left pl-3"
                data-testid="clientpinerr"
              >
                {props.errors.clientpin === "Invalid" ? (
                  <p className="  text-red-600">{props.errors.clientpin}</p>
                ) : props.errors.clientpin && props.touched.clientpin ? (
                  <p className="  text-red-600">{props.errors.clientpin}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputClientInfo;
