import React, { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { schema } from "../../schema/schema";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import FieldarrayComp from "../../components/FieldarrayComponent";
import Logo from "../../components/Logo";
import InputAddress from "../../components/InputAddress";
import InputAccountDetails from "../../components/InputAccountDetails";
import InputClientInfo from "../../components/InputClientInfo";

const FormData = (props) => {
  const navigate = useNavigate();
  const { data, setData, picture, setpicture } = props;
  const [check, setCheck] = useState(null);
  const [camon, setCamOn] = useState(false);

  const img = useRef(null);

  return (
    <div className="flex justify-center pt-16">
      <Formik
        initialValues={data}
        validationSchema={schema}
        onSubmit={() => {
          navigate("/templates");
        }}
      >
        {(props) => (
          <Form className="flex flex-col  bg-white  w-3/4 shadow justify-center items-center m-2 p-2">
            <div className="w-5/6 mb-12 mt-5">
              {/* first line  */}

              <div className="  grid grid-cols-1  gap-10  p-2  ">
                <div className=" items-center  ">
                  <label
                    className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1"
                    htmlFor="name"
                  >
                    Name:
                  </label>

                  <Field
                    type="text"
                    label="Name"
                    name="name"
                    placeholder="Name"
                    className=" p-2 m-1 w-full   rounded border-2 border-blue-200"
                  />
                  <div className="flex justify-left pl-3" data-testid="name">
                    {props.errors.name && props.touched.name ? (
                      <p className="  text-red-600">{props.errors.name}</p>
                    ) : null}
                  </div>
                </div>
              </div>

              {/* pic below  */}

              <Logo
                camon={camon}
                setCamOn={setCamOn}
                picture={picture}
                setpicture={setpicture}
                img={img}
              />

              {/*User Address */}

              <InputAddress props={props} />

              {/*Account details  */}

              <InputAccountDetails props={props} />
            </div>
            {/* client information   */}
            \
            <InputClientInfo props={props} />
            {/*  */}
            {/* list below  */}
            <div className="w-5/6 mb-12 mt-5" data-testid="fieldarrytext">
              <FieldarrayComp
                props={props}
                data={data}
                setCheck={setCheck}
                check={check}
              />
            </div>
            <div>
              {check ? (
                <div data-testid="sub1">
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    onClick={() => {
                      setData(props.values);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    data-testid="sub2"
                    type="submit"
                    variant="contained"
                    disabled
                    size="large"
                    onClick={() => {
                      setData(props.values);
                    }}
                  >
                    Submit
                  </Button>
                </div>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormData;
