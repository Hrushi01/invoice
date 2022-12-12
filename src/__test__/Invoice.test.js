import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Display from "../Display";

import Invoice from "../invoice/invoice1/Invoice";

// test("Invoice", () => {
//   render(
//     <Router>
//       <Invoice />
//     </Router>
//   );
//   const ele = screen.getByTestId("header");
//   expect(ele).toBeInTheDocument();
// });
test("Display2", () => {
  render(<Display />);
  const lielement2 = screen.getByTestId("text2");
  //   console.log("jdjdjdjjdjd", lielement);
  expect(lielement2).toBeInTheDocument();
});
