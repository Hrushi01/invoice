import React from "react";
import { Field } from "formik";

function InputAddress({ props }) {
  return (
    <div>
      <div>
        <label className="flex justify-start pl-3 font-bold font-sans text-xl text-gray-800 mt-4">
          Address:
        </label>
        <div className="  grid xl:2xl:grid-cols-4  gap-5  p-2  sm:grid-cols-2 ">
          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              Flat No,Building,etc:
            </label>

            <Field
              type="text"
              label="address"
              name="address"
              placeholder="Enter your address"
              className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="address">
              {props.errors.address && props.touched.address ? (
                <p className="  text-red-600">{props.errors.address}</p>
              ) : null}
            </div>
          </div>
          <div className="   ">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              City:
            </label>

            <Field
              type="text"
              label="city"
              name="city"
              placeholder="Enter your city"
              className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="city">
              {props.errors.city && props.touched.city ? (
                <p className="  text-red-600">{props.errors.city}</p>
              ) : null}
            </div>
          </div>

          <div className="   ">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              State:
            </label>

            <Field
              type="text"
              label="text"
              name="state"
              placeholder="Enter your state"
              className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="state">
              {props.errors.state && props.touched.state ? (
                <p className="  text-red-600">{props.errors.state}</p>
              ) : null}
            </div>
          </div>

          <div className="">
            <label className="flex justify-start pl-1 font-bold font-serif text-base text-gray-600">
              PinCode:
            </label>

            <Field
              min="0"
              max="999999"
              type="number"
              label="pin"
              name="pin"
              placeholder="Enter your pincode"
              className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
            />
            <div className="flex justify-left pl-3" data-testid="pin">
              {props.errors.pin === "Invalid" ? (
                <p className="  text-red-600">{props.errors.pin}</p>
              ) : props.errors.pin && props.touched.pin ? (
                <p className="  text-red-600">{props.errors.pin}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InputAddress;
