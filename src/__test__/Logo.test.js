import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Logo from "../components/Logo";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import { shallow } from "enzyme";
import userEvent from "@testing-library/user-event";

describe("Logo component", () => {
  const defaultProps = {
    picture: "https://example.com/example.png",
  };

  it("renders image correctly with valid image URL", () => {
    const wrapper = shallow(<Logo {...defaultProps} />);
    expect(wrapper.find("img").prop("src")).toEqual(defaultProps.picture);
  });

  it("renders default image when image URL is not provided", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.find("img").prop("src")).toContain("placeholder.com");
  });

  it("renders a default logo image", () => {
    render(<Logo />);
    const logoImage = screen.getByAltText("img");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage.src).toContain("via.placeholder.com");
  });

  it("should update the picture state when a file is selected", () => {
    render(<Logo />);

    const file = new File([""], "test.png", { type: "image/png" });

    const fileInput = screen.getByTestId("imp");

    userEvent.upload(fileInput, file);

    const imgElement = screen.getByTestId("setimg");
    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining("https://via.placeholder.com/150.png?text=Logo")
    );
  });

  it("clears the picture when the delete button is clicked", () => {
    render(<Logo />);
    const deleteButton = screen.getByTestId("imp");
    fireEvent.click(deleteButton);
    const logoImage = screen.getByAltText("img");
    expect(logoImage.src).toContain("via.placeholder.com");
  });

  it("sets the state when click on uplod", () => {
    const setCamOn = jest.fn();
    render(<Logo setCamOn={setCamOn} />);
    expect(screen.queryByTestId("web")).not.toBeInTheDocument();
    const clickbtn = screen.getByRole("button", { name: "Click now" });

    act(() => {
      clickbtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(setCamOn).toHaveBeenCalled();
  });

  it("opens the webcam capture when the Click now button is clicked", () => {
    const setCamOn = jest.fn();
    render(<Logo setCamOn={setCamOn} />);
    expect(screen.queryByTestId("web")).not.toBeInTheDocument();
    const clickbtn = screen.getByRole("button", { name: "Click now" });

    act(() => {
      clickbtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(setCamOn).toHaveBeenCalled();
  });
});
