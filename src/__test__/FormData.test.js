// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { BrowserRouter as Router } from "react-router-dom";

// import { createMemoryHistory } from "history";
// import FormData from "../routes/form";
// import Enzyme from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

// describe("FormData check", () => {
//   it("Name check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router
//         location={history.location}
//         children={history}
//         data={{
//           name: "",
//           address: "",
//           state: "",
//           city: "",
//           pin: "",
//           file: null,

//           holdername: "",
//           accnumber: "",
//           IFSC: "",
//           bankname: "",

//           clientname: "",
//           clientaddress: "",
//           clientstate: "",
//           clientpin: "",
//           invoicenumber: "",
//           invoicedate: "",

//           list: [
//             {
//               quantity: "",
//               description: "",
//               price: "",
//             },
//           ],
//         }}
//       >
//         <FormData />
//       </Router>
//     );

//     const text = screen.getByText("Name:");
//     expect(text).toBeInTheDocument();

//     const ele = screen.getByPlaceholderText("Name");
//     expect(ele).toBeInTheDocument();
//   });

//   it("Picture check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router location={history.location} children={history}>
//         <FormData />
//       </Router>
//     );
//     const ele = screen.getByAltText("img");

//     expect(ele).toBeInTheDocument();
//   });

//   it("Address  check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router location={history.location} children={history}>
//         <FormData />
//       </Router>
//     );
//     const text = screen.getByText("Address:");
//     expect(text).toBeInTheDocument();

//     const add = screen.getAllByText("Flat No,Building,etc:");
//     expect(add).toHaveLength(2);

//     const addin = screen.getByPlaceholderText("Enter your address");
//     expect(addin).toBeInTheDocument();

//     const state = screen.getAllByText("State:");
//     expect(state).toHaveLength(2);

//     const statein = screen.getByPlaceholderText("Enter your state");
//     expect(statein).toBeInTheDocument();

//     const pin = screen.getAllByText("PinCode:");
//     expect(pin).toHaveLength(2);

//     const pinin = screen.getByPlaceholderText("Enter your pincode");
//     expect(pinin).toBeInTheDocument();
//   });

//   it("Account  check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router location={history.location} children={history}>
//         <FormData />
//       </Router>
//     );
//     const text = screen.getByText("Account Details:");
//     expect(text).toBeInTheDocument();

//     const accname = screen.getByText("Account Holder Name:");
//     expect(accname).toBeInTheDocument();

//     const accnamein = screen.getByPlaceholderText("Account holder name");
//     expect(accnamein).toBeInTheDocument();

//     const accnum = screen.getByText("Bank Account Number:");
//     expect(accnum).toBeInTheDocument();

//     const accnumin = screen.getByPlaceholderText("Enter bank IFSC code");
//     expect(accnumin).toBeInTheDocument();

//     const ifsc = screen.getByText("Bank IFSC code:");
//     expect(ifsc).toBeInTheDocument();

//     const bankname = screen.getByText("Bank Name:");
//     expect(bankname).toBeInTheDocument();

//     const banknamein = screen.getByPlaceholderText("Enter bank name");
//     expect(banknamein).toBeInTheDocument();

//     const pinin = screen.getByPlaceholderText("Enter your pincode");
//     expect(pinin).toBeInTheDocument();
//   });

//   it("Client  Address", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router location={history.location} children={history}>
//         <FormData />
//       </Router>
//     );
//     const text = screen.getByText("Client Address:");
//     expect(text).toBeInTheDocument();

//     const clientaddressin = screen.getByPlaceholderText("Enter Client address");
//     expect(clientaddressin).toBeInTheDocument();

//     const clientstate = screen.getByPlaceholderText("Enter clientstate");
//     expect(clientstate).toBeInTheDocument();

//     const clientpinin = screen.getByPlaceholderText("Enter client pincode");
//     expect(clientpinin).toBeInTheDocument();
//   });

//   it("Table check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/"] });
//     render(
//       <Router location={history.location} children={history}>
//         <FormData />
//       </Router>
//     );
//     // const text = screen.getByText("Item Description:");

//     // expect(text).toBeInTheDocument();

//     // const text = screen.getByText("Account Details:");
//     // expect(text).toBeInTheDocument();

//     // const accname = screen.getByText("Account Holder Name:");
//     // expect(accname).toBeInTheDocument();

//     // const accnamein = screen.getByPlaceholderText("Description");
//     // expect(accnamein).toBeInTheDocument();

//     // const accnum = screen.getByText("Bank Account Number:");
//     // expect(accnum).toBeInTheDocument();

//     // const accnumin = screen.getByPlaceholderText("Enter bank IFSC code");
//     // expect(accnumin).toBeInTheDocument();

//     // const ifsc = screen.getByText("Bank IFSC code:");
//     // expect(ifsc).toBeInTheDocument();

//     // const bankname = screen.getByText("Bank Name:");
//     // expect(bankname).toBeInTheDocument();

//     // const banknamein = screen.getByPlaceholderText("Enter bank name");
//     // expect(banknamein).toBeInTheDocument();

//     // const pinin = screen.getByPlaceholderText("Enter your pincode");
//     // expect(pinin).toBeInTheDocument();
//   });
// });
