import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import Invoice from "../routes/invoice/template1";

const data = {
  name: "Hrushikesh",
  address: "B1-101",
  state: "Maharashtra",
  city: "Pune",
  pin: "411028",
  file: null,

  holdername: "Trakiot",
  accnumber: "411255",
  IFSC: "hfhf44",
  bankname: "BOB",

  clientname: "Trakiot",
  clientaddress: "Dhankavdi",
  clientstate: "Maharashtra",
  clientpin: "422515",
  invoicenumber: "11451",
  invoicedate: "22/06/2001",

  list: [
    {
      quantity: 4,
      description: "Something...",
      price: 5,
      total: null,
    },
  ],
};

describe("Invoice Check", () => {
  it("Name check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const address = screen.getByTestId("address");
    expect(address).toBeInTheDocument();

    // const ele = screen.getByPlaceholderText("Name");
    // expect(ele).toBeInTheDocument();
  });
  it("date check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const indate = screen.getByTestId("indate");
    expect(indate).toBeInTheDocument();
  });
  it("city state check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const citystate = screen.getByTestId("citystate");
    expect(citystate).toBeInTheDocument();
  });

  it("pincode check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const pin = screen.getByTestId("pincode");
    expect(pin).toBeInTheDocument();
  });

  it("invoice check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const invoice = screen.getByTestId("invoice");
    expect(invoice).toBeInTheDocument();
  });
  it("clientdetails check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const clientname = screen.getByTestId("clientname");
    expect(clientname).toBeInTheDocument();

    const clientadd = screen.getByTestId("clientadd");
    expect(clientadd).toBeInTheDocument();

    const clientstate = screen.getByTestId("clientstate");
    expect(clientstate).toBeInTheDocument();
    const clientpin = screen.getByTestId("clientpin");
    expect(clientpin).toBeInTheDocument();
    const acchname = screen.getByTestId("acc-hname");
    expect(acchname).toBeInTheDocument();

    const accnumber = screen.getByTestId("accnumber");
    expect(accnumber).toBeInTheDocument();
    const ifsc = screen.getByTestId("ifsc");
    expect(ifsc).toBeInTheDocument();
    const bankname = screen.getByTestId("bankname");
    expect(bankname).toBeInTheDocument();
  });

  it("Table check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const thead = screen.getByTestId("thead");
    expect(thead).toBeInTheDocument();

    const desc = screen.getByTestId("desc");
    expect(desc).toBeInTheDocument();

    const quantity = screen.getByTestId("quantity");
    expect(quantity).toBeInTheDocument();

    const price = screen.getByTestId("price");
    expect(price).toBeInTheDocument();

    const total = screen.getByTestId("total");
    expect(total).toBeInTheDocument();

    const totalfunction = screen.getByTestId("totalfunction");
    expect(totalfunction).toBeInTheDocument();
  });

  it("Totalamt check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice data={data} />
      </Router>
    );
    const sum = screen.getByTestId("sum");
    expect(sum).toBeInTheDocument();

    const due = screen.getByTestId("due");
    expect(due).toBeInTheDocument();
  });
});
