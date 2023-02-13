import { render, screen } from "@testing-library/react";
import Dates from "../components/Dates";
import "@testing-library/jest-dom";

describe("Dates component", () => {
  test("renders invoice number", () => {
    render(<Dates />);
    const invoiceNumber = screen.getByText("Invoice number");
    expect(invoiceNumber).toBeInTheDocument();
  });

  test("renders invoice date", () => {
    render(<Dates />);
    const invoiceDate = screen.getByText("onvo date");
    expect(invoiceDate).toBeInTheDocument();
  });

  test("renders invoice due date", () => {
    render(<Dates />);
    const invoiceDueDate = screen.getByText("invi deue date");
    expect(invoiceDueDate).toBeInTheDocument();
  });
});
