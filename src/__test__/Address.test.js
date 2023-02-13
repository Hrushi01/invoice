import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Address from "../components/Address";

describe("Address component", () => {
  const data = {
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    pin: "12345",
    invoicenumber: "INV001",
    invoicedate: "2022-01-01",
  };

  test("renders address details", () => {
    render(<Address data={data} />);
    expect(screen.getByTestId("address")).toHaveTextContent("123 Main St");
    expect(screen.getByTestId("citystate")).toHaveTextContent("Anytown,CA");
    expect(screen.getByTestId("pincode")).toHaveTextContent("Pincode-12345");
  });

  test("renders invoice details", () => {
    render(<Address data={data} />);
    expect(screen.getByTestId("invoice")).toHaveTextContent("INV001");
    expect(screen.getByTestId("indate")).toHaveTextContent("2022-01-01");
  });
});
