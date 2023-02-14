import React from "react";
import { Field, FieldArray, ErrorMessage } from "formik";

import Capcha from "../components/Capcha";

function FieldarrayComp({ data, check, setCheck, props }) {
  let sum = 0;
  const calTot = (index) => {
    var pr = "0";
    pr = data?.list[index]?.quantity * data?.list[index]?.price;
    sum = sum + pr;
    return pr;
  };
  return (
    <>
      <FieldArray
        name="list"
        data-testid="fieldarry"
        render={(arrayhelpers) => {
          return (
            <>
              <div>
                {props?.values?.list?.map((item, index) => {
                  return (
                    <div
                      className="mt-2  border-solid shadow-xl mb-5 rounded-lg "
                      key={index}
                    >
                      {index > 0 && (
                        <div>
                          <button
                            type="button"
                            className="float-right text-xl "
                            onClick={() => arrayhelpers.remove(index)}
                          >
                            ❌
                          </button>
                        </div>
                      )}
                      <div className="p-5">
                        <div className="flex justify-start italic w-fit p-1 text-slate-400">
                          {`Item ${index + 1}`}
                        </div>
                        <div className="card-body p-2">
                          <div className="  grid grid-cols-1  gap-10  p-2 w-full ">
                            <div className="  w-full  ">
                              <label
                                className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                                htmlFor={`list.${index}.description`}
                                data-testid="item"
                              >
                                Item Description:
                              </label>

                              <Field
                                type="text"
                                label="Name"
                                name={`list.${index}.description`}
                                placeholder="Description"
                                className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                              />

                              <div className="text-red-600 flex justify-left pl-3">
                                <ErrorMessage
                                  name={`list.${index}.description`}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-2  md:gap-5 lg:gap-10  p-2 w-full sm:gap-2  ">
                            <div className=" flex-col    flex">
                              <label
                                className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                htmlFor={`list.${index}.quantity`}
                              >
                                Quantity:
                              </label>
                              <Field
                                type="number"
                                label="quantity"
                                min="0"
                                name={`list.${index}.quantity`}
                                placeholder="Enter your Quantity"
                                className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                              />
                              <div className="text-red-600 flex justify-left pl-3">
                                <ErrorMessage name={`list.${index}.quantity`} />
                              </div>
                            </div>

                            <div className=" flex flex-col">
                              <label
                                className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                htmlFor={`list.${index}.price`}
                              >
                                Price:
                              </label>
                              <Field
                                type="number"
                                min="0"
                                label="Price"
                                name={`list.${index}.price`}
                                placeholder="Enter your price"
                                className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
                              />
                            </div>
                            <div className="hidden">
                              <label
                                className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                htmlFor={`list.${index}.total`}
                              >
                                Amount:
                              </label>
                              <Field
                                disabled
                                hidden
                                value={calTot(index) ? calTot(index) : 0}
                                className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
                                label={`list.${index}.total`}
                                name={`list.${index}.total`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <button
                  type="button"
                  className="float-right flex   text-blue-600 p-1 italic rounded-xl"
                  onClick={() => {
                    arrayhelpers.insert(
                      arrayhelpers.form.values?.list?.length + 1,
                      {
                        quantity: 0,
                        description: "",
                        price: 0,
                        total: null,
                      }
                    );
                  }}
                >
                  Add Item+
                </button>
              </div>
            </>
          );
        }}
      />
      <div className="grid grid-cols-2">
        <Capcha check={check} setCheck={setCheck} />
      </div>
    </>
  );
}

export default FieldarrayComp;
