import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Capcha from "../components/Capcha";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders the captcha component", () => {
  render(<Capcha />, container);
  expect(container.textContent).toContain("CAPTCHA:What is  += ?");
});

test("verifies the answer", () => {
  const checkFn = jest.fn();
  const setchek = jest.fn();

  render(<Capcha check={checkFn} setCheck={setchek} />, container);

  const verifyBtn = container.querySelector(".testing1");
  verifyBtn.onclick = checkFn;
  act(() => {
    verifyBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(checkFn).toHaveBeenCalled();
});
test("Redo check", () => {
  const checkFn = jest.fn();
  const setchek = jest.fn();

  render(
    <Capcha
      check={checkFn}
      setCheck={setchek}
      setAns={checkFn}
      setRefresh={checkFn}
    />,
    container
  );

  const verifyBtn = container.querySelector(".redotest");
  verifyBtn.onclick = checkFn;
  act(() => {
    verifyBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(checkFn).toHaveBeenCalled();
});
