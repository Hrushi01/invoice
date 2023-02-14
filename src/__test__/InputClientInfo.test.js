import React from "react";
import { render, screen } from "@testing-library/react";
import InputClientInfo from "../components/InputClientInfo";
import { Formik } from "formik";
import "@testing-library/jest-dom";
import { schema } from "../schema/schema";

describe("InputClientInfo component", () => {
  test("Render all input field", () => {
    render(
      <Formik validationSchema={schema}>
        {(props) => <InputClientInfo props={props} />}
      </Formik>
    );

    expect(screen.getByPlaceholderText("Enter Clientname")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter invoicenumber")
    ).toBeInTheDocument();
    expect(screen.getByTestId("invoicedate")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter Client address")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter clientstate")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter client pincode")
    ).toBeInTheDocument();
  });
});

test("displays error message when clientname is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputClientInfo
        props={{
          errors: { clientname: "clientname is required" },
          touched: { clientname: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("clientname");
  expect(errorMessage).toHaveTextContent("clientname is required");
});

test("displays error message when invonumber is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputClientInfo
        props={{
          errors: { invoicenumber: "invonumber is required" },
          touched: { invoicenumber: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("invonumber");
  expect(errorMessage).toHaveTextContent("invonumber is required");
});

test("displays error message when invodate is not provided", async () => {
  render(
    <Formik validationSchema={schema}>
      <InputClientInfo
        props={{
          errors: { invoicedate: "invodate is required" },
          touched: { invoicedate: true },
        }}
      />
    </Formik>
  );
  const errorMessage = await screen.findByTestId("invodate");
  expect(errorMessage).toHaveTextContent("invodate is required");
});

it("should display error message when clientpin is invalid or touched", () => {
  const props = {
    errors: {
      clientpin: "Invalid",
    },
    touched: {
      clientpin: true,
    },
  };

  render(
    <Formik validationSchema={schema}>
      <InputClientInfo props={props} />
    </Formik>
  );

  const clientpinElement = screen.getByTestId("clientpinerr");

  // Error message should be displayed when clientpin is invalid
  expect(clientpinElement).toHaveTextContent("Invalid");

  // Error message should be displayed when clientpin is touched and has an error
  props.errors.clientpin = "Some other error message";
  props.touched.clientpin = true;

  render(
    <Formik validationSchema={schema}>
      <InputClientInfo props={props} />
    </Formik>
  );
  expect(clientpinElement).toHaveTextContent("Invalid");

  // Error message should not be displayed when clientpin is not touched and has no error
});
