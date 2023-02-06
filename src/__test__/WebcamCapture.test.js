import React from "react";
import { cleanup, screen } from "@testing-library/react";
import { render, unmountComponentAtNode } from "react-dom";

import { act } from "react-dom/test-utils";
import WebcamCapture from "../components/WebcamCapture";

afterEach(cleanup);

describe("WebcamCapture component", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it("renders webcam modal", () => {
    render(
      <WebcamCapture
        camon={true}
        setCamOn={() => {}}
        picture={null}
        setPicture={() => {}}
      />,
      container
    );
    const modal = screen.getByTestId("webcam-modal");
    expect(modal).toBeInTheDocument();
  });
  it("modal", () => {
    render(
      <WebcamCapture
        camon={true}
        setCamOn={() => {}}
        picture={null}
        setPicture={() => {}}
      />,
      container
    );
    expect(screen.getByTestId("webcam-modal")).toBeTruthy();
  });

  it("renders webcam", () => {
    render(
      <WebcamCapture
        camon={true}
        setCamOn={() => {}}
        picture={null}
        setPicture={() => {}}
      />,
      container
    );
    const webcam = screen.getByTestId("webcam");
    expect(webcam).toBeDefined();
  });

  it("captures webcam image", () => {
    const mockSetPicture = jest.fn();
    render(
      <WebcamCapture
        camon={true}
        setCamOn={() => {}}
        picture={null}
        setpicture={mockSetPicture}
      />,
      container
    );
    const captureButton = screen.getByTestId("capture-button");
    captureButton.click();
    expect(mockSetPicture).toHaveBeenCalled();
  });

  it("renders webc", () => {
    render(<WebcamCapture camon={true} />, container);
    expect(screen.getByTestId("webcam")).toBeTruthy();
  });

  it("renders image after", () => {
    render(<WebcamCapture camon={true} picture="test_image.jpeg" />, container);
    expect(screen.getByTestId("img")).toBeTruthy();
  });

  it("closes modal on clicking close button", () => {
    const setCamOn = jest.fn();
    render(<WebcamCapture camon={true} setCamOn={setCamOn} />, container);
    const closeBtn = screen.getByTestId("close-button");
    act(() => {
      closeBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(setCamOn).toHaveBeenCalledWith(false);
  });

  it("should call setPicture when clicked", () => {
    const setPicture = jest.fn();
    render(<WebcamCapture camon={true} setpicture={setPicture} />, container);

    const retakeButton = screen.getByTestId("retake-button");

    act(() => {
      retakeButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(setPicture).toHaveBeenCalled();
  });
});
