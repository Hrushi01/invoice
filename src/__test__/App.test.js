import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("renders the Display component", () => {
    render(<App />);
    expect(screen.getByTestId("display-component")).toBeInTheDocument();
  });
});
