import React from "react";
import { shallow } from "enzyme";
import Screen from "../routes/screen";
import { Link } from "react-router-dom";

describe("Screen", () => {
  it("should render without errors", () => {
    shallow(<Screen />);
  });

  it("should render a title", () => {
    const wrapper = shallow(<Screen />);
    const title = wrapper.find("div").at(1);
    expect(title.text()).toBe("Choose Your Template!!");
  });

  it("should render four images with links", () => {
    const wrapper = shallow(<Screen />);
    const links = wrapper.find(Link);
    expect(links).toHaveLength(4);
    expect(links.at(0).prop("to")).toBe("/template1");
    expect(links.at(1).prop("to")).toBe("/template2");
    expect(links.at(2).prop("to")).toBe("/template1");
    expect(links.at(3).prop("to")).toBe("/template2");

    const images = wrapper.find("img");
    expect(images).toHaveLength(4);
    expect(images.at(0).prop("src")).toBe("template2.png");
    expect(images.at(1).prop("src")).toBe("template1.png");
    expect(images.at(2).prop("src")).toBe("template2.png");
    expect(images.at(3).prop("src")).toBe("template1.png");
  });
});
