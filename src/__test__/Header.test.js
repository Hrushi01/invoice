import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  const mockData = { name: "Test Company" };
  const mockHandlePrint = jest.fn();

  it("renders the component", () => {
    render(<Header data={mockData} handelprint={mockHandlePrint} />);
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("Invoice")).toBeInTheDocument();
  });
});
