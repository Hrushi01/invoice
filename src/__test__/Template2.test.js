// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import { createMemoryHistory } from "history";

// import Invoice2 from "../routes/invoice/template2";

// const data = {
//   name: "Hrushikesh",
//   address: "B1-101",
//   state: "Maharashtra",
//   city: "Pune",
//   pin: "411028",
//   file: null,

//   holdername: "Trakiot",
//   accnumber: "411255",
//   IFSC: "hfhf44",
//   bankname: "BOB",

//   clientname: "Trakiot",
//   clientaddress: "Dhankavdi",
//   clientstate: "Maharashtra",
//   clientpin: "422515",
//   invoicenumber: "11451",
//   invoicedate: "22/06/2001",

//   list: [
//     {
//       quantity: 4,
//       description: "Something...",
//       price: 5,
//       total: null,
//     },
//   ],
// };

// describe("Template2 check", () => {
//   it("Logo check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template2"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const logo = screen.getByTestId("logo");
//     expect(logo).toBeInTheDocument();
//   });
//   it("indate check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const indate = screen.getByTestId("indate");
//     expect(indate).toBeInTheDocument();
//   });
//   it("innumber check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const innumber = screen.getByTestId("innumber");
//     expect(innumber).toBeInTheDocument();
//   });
//   it("pincode check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const pincode = screen.getByTestId("pincode");
//     expect(pincode).toBeInTheDocument();
//   });
//   it("state check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const state = screen.getByTestId("state");
//     expect(state).toBeInTheDocument();
//   });

//   it("address check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const address = screen.getByTestId("address");
//     expect(address).toBeInTheDocument();
//   });
//   it("name check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const name = screen.getByTestId("name");
//     expect(name).toBeInTheDocument();
//   });
//   it("table check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const thead = screen.getByTestId("thead");
//     expect(thead).toBeInTheDocument();

//     const desc = screen.getByTestId("desc");
//     expect(desc).toBeInTheDocument();

//     const quantity = screen.getByTestId("quantity");
//     expect(quantity).toBeInTheDocument();

//     const price = screen.getByTestId("price");
//     expect(price).toBeInTheDocument();

//     const total = screen.getByTestId("total");
//     expect(total).toBeInTheDocument();

//     const totalfunction = screen.getByTestId("totalfunction");
//     expect(totalfunction).toBeInTheDocument();
//   });

//   it("Total check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const sum = screen.getByTestId("sum");
//     expect(sum).toBeInTheDocument();

//     const tax = screen.getByTestId("tax");
//     expect(tax).toBeInTheDocument();

//     const total = screen.getByTestId("totalt");
//     expect(total).toBeInTheDocument();
//   });
//   it("Footer check", () => {
//     const history = createMemoryHistory({ initialEntries: ["/template1"] });
//     render(
//       <Router location={history.location} children={history}>
//         <Invoice2 data={data} />
//       </Router>
//     );
//     const hname = screen.getByTestId("hname");
//     expect(hname).toBeInTheDocument();

//     const bankname = screen.getByTestId("bankname");
//     expect(bankname).toBeInTheDocument();

//     const accnum = screen.getByTestId("accnum");
//     expect(accnum).toBeInTheDocument();
//   });
// });
