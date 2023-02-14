import React from "react";
import { shallow } from "enzyme";
import InputAddress from "../components/InputAddress";
import { render, screen } from "@testing-library/react";
import InputClientInfo from "../components/InputClientInfo";
import { Formik } from "formik";
import "@testing-library/jest-dom";
import { schema } from "../schema/schema";

describe("InputAddress", () => {
  let wrapper;
  const props = {
    errors: {},
    touched: {},
  };

  beforeEach(() => {
    wrapper = shallow(<InputAddress props={props} />);
  });

  it("renders without crashing", () => {
    expect(wrapper.length).toBe(1);
  });
  it("renders four input fields", () => {
    expect(wrapper.find("Field").length).toBe(4);
  });

  it("displays error messages correctly", () => {
    const errorProps = {
      errors: {
        address: "Address is required",
        city: "City is required",
        state: "State is required",
        pin: "Pincode is required",
      },
      touched: { address: true, city: true, state: true, pin: true },
    };
    const errorWrapper = shallow(<InputAddress props={errorProps} />);
    expect(errorWrapper.find("p.text-red-600").length).toBe(4);
    expect(errorWrapper.find("p").map((node) => node.text())).toEqual([
      "Address is required",
      "City is required",
      "State is required",
      "Pincode is required",
    ]);
  });

  test("displays error message when address is not provided", async () => {
    render(
      <Formik validationSchema={schema}>
        <InputAddress
          props={{
            errors: { address: "address is required" },
            touched: { address: true },
          }}
        />
      </Formik>
    );
    const errorMessage = await screen.findByTestId("address");
    expect(errorMessage).toHaveTextContent("address is required");
  });

  test("displays error message when city is not provided", async () => {
    render(
      <Formik validationSchema={schema}>
        <InputAddress
          props={{
            errors: { city: "city is required" },
            touched: { city: true },
          }}
        />
      </Formik>
    );
    const errorMessage = await screen.findByTestId("city");
    expect(errorMessage).toHaveTextContent("city is required");
  });
  test("displays error message when state is not provided", async () => {
    render(
      <Formik validationSchema={schema}>
        <InputAddress
          props={{
            errors: { state: "state is required" },
            touched: { state: true },
          }}
        />
      </Formik>
    );
    const errorMessage = await screen.findByTestId("state");
    expect(errorMessage).toHaveTextContent("state is required");
  });
  test("displays error message when pin is not provided", async () => {
    render(
      <Formik validationSchema={schema}>
        <InputAddress
          props={{
            errors: { pin: "pin is required" },
            touched: { pin: true },
          }}
        />
      </Formik>
    );
    const errorMessage = await screen.findByTestId("pin");
    expect(errorMessage).toHaveTextContent("pin is required");
  });
});
