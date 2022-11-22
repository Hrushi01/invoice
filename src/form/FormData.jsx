import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { schema } from "../schema/schema";

const FormData = (props) => {
  const { data, setShowInvoice, setData } = props;
  let sum = 0;
  const calTot = (index) => {
    let pr = data?.list[index]?.quantity * data?.list[index]?.price;
    sum = sum + pr;
    return pr;
  };

  return (
    <div className="flex justify-center">
      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={() => {
          console.log("done");
          setShowInvoice(true);
        }}>
        {(props) => (
          <Form className="flex flex-col  bg-white  w-3/4 shadow justify-center items-center m-2 p-2">
            <div className="w-5/6 mb-12 mt-5">
              {/* first line  */}
              {/* first line  */}
              {/* first line  */}
              {/* first line  */}
              <div className="  grid grid-cols-1  gap-10  p-2  ">
                <div className=" items-center  ">
                  <label className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1">
                    Name:
                  </label>

                  <Field
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                  />
                  <div className="flex justify-left pl-3">
                    {props.errors.name && props.touched.name ? (
                      <p className="  text-red-600">{props.errors.name}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/*User Address */}
              {/*User Address */}
              {/*User Address */}
              {/*User Address */}
              {/* User Address*/}
              <div>
                <label className="flex justify-start pl-3 font-bold font-sans text-xl text-gray-800 mt-4">
                  Address:
                </label>
                <div className="  grid grid-cols-4  gap-5  p-2  ">
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
                    <div className="flex justify-left pl-3">
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
                    <div className="flex justify-left pl-3">
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
                    <div className="flex justify-left pl-3">
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
                    <div className="flex justify-left pl-3">
                      {props.errors.pin === "Invalid" ? (
                        <p className="  text-red-600">{props.errors.pin}</p>
                      ) : props.errors.pin && props.touched.pin ? (
                        <p className="  text-red-600">{props.errors.pin}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/*Account details  */}
              {/* Account details */}
              {/* Account details */}
              {/* Account details */}
              {/* Account details */}
              {/* Account details */}
              <div>
                <label className="flex justify-start pl-3 font-bold font-sans text-xl text-gray-800 mt-4">
                  Account Details:
                </label>

                <div className="  grid grid-cols-2  gap-5 gap-y-3  p-2  ">
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
                    <div className="flex justify-left pl-3">
                      {props.errors.holdername && props.touched.holdername ? (
                        <p className="  text-red-600">
                          {props.errors.holdername}
                        </p>
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
                    <div className="flex justify-left pl-3">
                      {props.errors.accnumber && props.touched.accnumber ? (
                        <p className="  text-red-600">
                          {props.errors.accnumber}
                        </p>
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
                    <div className="flex justify-left pl-3">
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
                    <div className="flex justify-left pl-3">
                      {props.errors.bankname && props.touched.bankname ? (
                        <p className="  text-red-600">
                          {props.errors.bankname}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* client information   */}
            {/* client information   */}
            {/* client information   */}
            {/* client information   */}
            {/* client information   */}

            <div className="w-5/6 mb-12 mt-5">
              {/* first line  */}
              {/* first line  */}
              {/* first line  */}
              {/* first line  */}
              <div className="  grid grid-cols-1  gap-10  p-2  ">
                <div className="   ">
                  <label className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1">
                    Client Name:
                  </label>

                  <Field
                    type="text"
                    label="clientname"
                    name="clientname"
                    placeholder="Enter Clientname"
                    className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                  />
                  <div className="flex justify-left pl-3">
                    {props.errors.clientname && props.touched.clientname ? (
                      <p className="  text-red-600">
                        {props.errors.clientname}
                      </p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* invoice details  */}
              {/* invoice details  */}
              {/* invoice details  */}
              {/* invoice details  */}

              <div className="  grid grid-cols-2  gap-10  p-2  ">
                <div className="   ">
                  <label className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600">
                    Invoice Number:
                  </label>

                  <Field
                    type="number"
                    label="invoicenumber"
                    name="invoicenumber"
                    placeholder="Enter invoicenumber"
                    className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                  />
                  <div className="flex justify-left pl-3">
                    {props.errors.invoicenumber &&
                    props.touched.invoicenumber ? (
                      <p className="  text-red-600">
                        {props.errors.invoicenumber}
                      </p>
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
                    name="invoicedate"
                    className="  p-2 m-1 w-full   rounded border-2  border-blue-200"
                  />
                  <div className="flex justify-left pl-3">
                    {props.errors.invoicedate && props.touched.invoicedate ? (
                      <p className="  text-red-600">
                        {props.errors.invoicedate}
                      </p>
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
                <div className="  grid grid-cols-3  gap-10  p-2  ">
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
                    <div className="flex justify-left pl-3">
                      {props.errors.clientaddress &&
                      props.touched.clientaddress ? (
                        <p className="  text-red-600">
                          {props.errors.clientaddress}
                        </p>
                      ) : null}
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
                    <div className="flex justify-left pl-3">
                      {props.errors.clientstate && props.touched.clientstate ? (
                        <p className="  text-red-600">
                          {props.errors.clientstate}
                        </p>
                      ) : null}
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
                    <div className="flex justify-left pl-3">
                      {props.errors.clientpin === "Invalid" ? (
                        <p className="  text-red-600">
                          {props.errors.clientpin}
                        </p>
                      ) : props.errors.clientpin && props.touched.clientpin ? (
                        <p className="  text-red-600">
                          {props.errors.clientpin}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* table below  */}
            {/* table below  */}
            {/* table below  */}
            {/* table below  */}
            {/* table below  */}

            <div className="w-5/6 mb-12 mt-5">
              {/* list below  */}
              {/* list below  */}
              {/* list below  */}
              {/* list below  */}
              {/* list below  */}

              <FieldArray
                name="list"
                render={(arrayhelpers) => {
                  return (
                    <>
                      <div>
                        {props?.values?.list ? (
                          [0] &&
                          props?.values?.list?.map((item, index) => {
                            return (
                              <div
                                className="mt-2  border-solid shadow-xl mb-5 rounded-lg "
                                key={index}>
                                {index > 0 && (
                                  <div>
                                    <button
                                      type="button"
                                      className="float-right text-xl "
                                      onClick={() =>
                                        arrayhelpers.remove(index)
                                      }>
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
                                          htmlFor={`list.${index}.description`}>
                                          Item Description:
                                        </label>

                                        <Field
                                          type="text"
                                          label="Name"
                                          name={`list.${index}.description`}
                                          placeholder="Description"
                                          className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                                        />
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-3  gap-10  p-2 w-full ">
                                      <div className=" flex-col    flex">
                                        <label
                                          className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                          htmlFor={`list.${index}.quantity`}>
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
                                      </div>

                                      <div className=" flex flex-col">
                                        <label
                                          className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                          htmlFor={`list.${index}.price`}>
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
                                      <div className="">
                                        <label
                                          className="flex justify-start pl-1 font-bold font-serif text-lg text-gray-600"
                                          htmlFor={`list.${index}.total`}>
                                          Amount:
                                        </label>
                                        <Field
                                          disabled
                                          value={calTot(index)}
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
                          })
                        ) : (
                          <></>
                        )}
                        <button
                          type="button"
                          className="float-right flex   text-blue-600 p-1 italic rounded-xl"
                          onClick={() => {
                            arrayhelpers.insert(props.values.list.length + 1, {
                              quantity: "",
                              description: "",
                              price: "",
                              total: "",
                            });
                            console.log("gdgd");
                          }}>
                          Add Item+
                        </button>
                      </div>
                    </>
                  );
                }}
              />
            </div>
            <button
              type="submit"
              className=" bg-blue-600 text-white rounded p-2 bottom-4 ">
              Submit
            </button>
            {console.log(props.errors, "Props.erros")}
            {setData(props.values)}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormData;
