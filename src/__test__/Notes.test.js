import React from "react";
import { render, screen } from "@testing-library/react";
import Notes from "../components/Notes";
import "@testing-library/jest-dom";

test('renders a "Note to client..." text', () => {
  render(<Notes />);
  const noteText = screen.getByText(/Note to client\.\.\./i);
  expect(noteText).toBeInTheDocument();
});
