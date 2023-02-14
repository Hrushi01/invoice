import React from "react";
import { shallow } from "enzyme";
import InputAccountDetails from "../components/InputAccountDetails";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Formik } from "formik";
import { schema } from "../schema/schema";

describe("InputAccountDetails component", () => {
  let wrapper;
  const props = {
    errors: {},
    touched: {},
  };

  beforeEach(() => {
    wrapper = shallow(<InputAccountDetails props={props} />);
  });

  it("should render a label for account details", () => {
    expect(wrapper.find("label").at(0).text()).toEqual("Account Details:");
  });

  it("should render a label for account holder name", () => {
    expect(wrapper.find("label").at(1).text()).toEqual("Account Holder Name:");
  });

  it("should render a Field for account holder name", () => {
    expect(wrapper.find("Field[name='holdername']").exists()).toBe(true);
  });

  it("should render a label for bank account number", () => {
    expect(wrapper.find("label").at(2).text()).toEqual("Bank Account Number:");
  });

  it("should render a Field for bank account number", () => {
    expect(wrapper.find("Field[name='accnumber']").exists()).toBe(true);
  });

  it("should render a label for bank IFSC code", () => {
    expect(wrapper.find("label").at(3).text()).toEqual("Bank IFSC code:");
  });

  it("should render a Field for bank IFSC code", () => {
    expect(wrapper.find("Field[name='IFSC']").exists()).toBe(true);
  });

  it("should render a label for bank name", () => {
    expect(wrapper.find("label").at(4).text()).toEqual("Bank Name:");
  });

  it("should render a Field for bank name", () => {
    expect(wrapper.find("Field[name='bankname']").exists()).toBe(true);
  });
});
test("displays error message when bank name is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputAccountDetails
        props={{
          errors: { bankname: "Bank name is required" },
          touched: { bankname: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("bankname-error-message");
  expect(errorMessage).toHaveTextContent("Bank name is required");
});

test("displays error message when account number is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputAccountDetails
        props={{
          errors: { accnumber: "Account number is required" },
          touched: { accnumber: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("accnumber-error-message");
  expect(errorMessage).toHaveTextContent("Account number is required");
});

test("displays error message when IFSC code is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputAccountDetails
        props={{
          errors: { IFSC: "IFSC code is required" },
          touched: { IFSC: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("IFSC-error-message");
  expect(errorMessage).toHaveTextContent("IFSC code is required");
});

test("displays error message when account holder name is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputAccountDetails
        props={{
          errors: { holdername: "Account holder name is required" },
          touched: { holdername: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("holdername-error-message");
  expect(errorMessage).toHaveTextContent("Account holder name is required");
});
