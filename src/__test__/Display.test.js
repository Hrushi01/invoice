import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Display from "../Display";
import FormData from "../form/FormData";
import { Router, Route, Routes } from "react-router-dom";

test("Display", () => {
  render(<Display />);
  const lielement = screen.getByTestId("text");
  //   console.log("jdjdjdjjdjd", lielement);
  expect(lielement).toBeInTheDocument();
});
test("Display2", () => {
  render(<Display />);
  const lielement2 = screen.getByTestId("text2");
  //   console.log("display", lielement);
  expect(lielement2).toBeInTheDocument();
});

test("testing formdata component", () => {
  // const mockedUsedNavigate = jest.fn();

  // jest.mock("react-router-dom", () => ({
  //   ...jest.requireActual("react-router-dom"),
  //   useNavigate: () => mockedUsedNavigate,
  // }));
  render(<FormData />);

  const childElement = screen.getByRole("textbox");
  // console.log("HELOOO", childElement);

  expect(childElement).toBeInTheDocument();
});
