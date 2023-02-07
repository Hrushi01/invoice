import "@testing-library/jest-dom";
import Display from "../pages/display";

import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("Display Check", () => {
  test("object check", () => {
    let wrapper = shallow(<Display />);
    expect(wrapper.exists(".text1")).toEqual(true);
  });
  it("object check2", () => {
    let wrapper = shallow(<Display />);
    expect(wrapper.exists(".text2")).toEqual(true);
  });
});
