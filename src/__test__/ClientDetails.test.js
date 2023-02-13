import React from "react";
import { render, screen } from "@testing-library/react";
import ClientDetails from "../components/ClientDetails";
import "@testing-library/jest-dom";

describe("ClientDetails", () => {
  const data = {
    clientname: "John Smith",
    clientaddress: "123 Main St.",
    clientstate: "California",
    clientpin: "12345",
    holdername: "Jane Smith",
    accnumber: "1234567890",
    IFSC: "ABCD1234567",
    bankname: "Bank of America",
  };

  it("should render client name, address, state, and pin code", () => {
    render(<ClientDetails data={data} />);
    expect(screen.getByTestId("clientname")).toHaveTextContent("John Smith");
    expect(screen.getByTestId("clientadd")).toHaveTextContent("123 Main St.");
    expect(screen.getByTestId("clientstate")).toHaveTextContent("California");
    expect(screen.getByTestId("clientpin")).toHaveTextContent("PinCode:12345");
  });

  it("should render account holder name, account number, IFSC code, and bank name", () => {
    render(<ClientDetails data={data} />);
    expect(screen.getByTestId("acc-hname")).toHaveTextContent(
      "Account Holder's Name: Jane Smith"
    );
    expect(screen.getByTestId("accnumber")).toHaveTextContent(
      "Bank Account Number: 1234567890"
    );
    expect(screen.getByTestId("ifsc")).toHaveTextContent(
      "IFSC code: ABCD1234567"
    );
    expect(screen.getByTestId("bankname")).toHaveTextContent(
      "Bank Name: BANK OF AMERICA"
    );
  });
});
