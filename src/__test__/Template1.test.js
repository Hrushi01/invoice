import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createMemoryHistory } from "history";
import Invoice from "../routes/invoice/template1";

describe("Invoice Check", () => {
  it("Name check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice
          data={{
            name: "hrusih",
            address: "eehheheheh",
            state: "Maharashtra",
            city: "Pune",
            pin: "411028",
            file: null,

            holdername: "Trakiot",
            accnumber: "411255",
            IFSC: "hfhf44",
            bankname: "nnfnfnfn",

            clientname: "trakiot",
            clientaddress: "hthhthth",
            clientstate: "jtjtjtjjt",
            clientpin: "422515",
            invoicenumber: "11451",
            invoicedate: "",

            list: [
              {
                quantity: 4,
                description: "dndndn",
                price: 5,
                total: null,
              },
            ],
          }}
        />
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
        <Invoice
          data={{
            name: "hrusih",
            address: "eehheheheh",
            state: "Maharashtra",
            city: "Pune",
            pin: "411028",
            file: null,

            holdername: "Trakiot",
            accnumber: "411255",
            IFSC: "hfhf44",
            bankname: "nnfnfnfn",

            clientname: "trakiot",
            clientaddress: "hthhthth",
            clientstate: "jtjtjtjjt",
            clientpin: "422515",
            invoicenumber: "11451",
            invoicedate: "",

            list: [
              {
                quantity: 4,
                description: "dndndn",
                price: 5,
                total: null,
              },
            ],
          }}
        />
      </Router>
    );
    const indate = screen.getByTestId("indate");
    expect(indate).toBeInTheDocument();
  });
  it("city state check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice
          data={{
            name: "hrusih",
            address: "eehheheheh",
            state: "Maharashtra",
            city: "Pune",
            pin: "411028",
            file: null,

            holdername: "Trakiot",
            accnumber: "411255",
            IFSC: "hfhf44",
            bankname: "nnfnfnfn",

            clientname: "trakiot",
            clientaddress: "hthhthth",
            clientstate: "jtjtjtjjt",
            clientpin: "422515",
            invoicenumber: "11451",
            invoicedate: "",

            list: [
              {
                quantity: 4,
                description: "dndndn",
                price: 5,
                total: null,
              },
            ],
          }}
        />
      </Router>
    );
    const citystate = screen.getByTestId("citystate");
    expect(citystate).toBeInTheDocument();
  });

  it("pincode check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice
          data={{
            name: "hrusih",
            address: "eehheheheh",
            state: "Maharashtra",
            city: "Pune",
            pin: "411028",
            file: null,

            holdername: "Trakiot",
            accnumber: "411255",
            IFSC: "hfhf44",
            bankname: "nnfnfnfn",

            clientname: "trakiot",
            clientaddress: "hthhthth",
            clientstate: "jtjtjtjjt",
            clientpin: "422515",
            invoicenumber: "11451",
            invoicedate: "",

            list: [
              {
                quantity: 4,
                description: "dndndn",
                price: 5,
                total: null,
              },
            ],
          }}
        />
      </Router>
    );
    const pin = screen.getByTestId("pincode");
    expect(pin).toBeInTheDocument();
  });

  it("invoice check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice
          data={{
            name: "hrusih",
            address: "eehheheheh",
            state: "Maharashtra",
            city: "Pune",
            pin: "411028",
            file: null,

            holdername: "Trakiot",
            accnumber: "411255",
            IFSC: "hfhf44",
            bankname: "nnfnfnfn",

            clientname: "trakiot",
            clientaddress: "hthhthth",
            clientstate: "jtjtjtjjt",
            clientpin: "422515",
            invoicenumber: "11451",
            invoicedate: "",

            list: [
              {
                quantity: 4,
                description: "dndndn",
                price: 5,
                total: null,
              },
            ],
          }}
        />
      </Router>
    );
    const invoice = screen.getByTestId("invoice");
    expect(invoice).toBeInTheDocument();
  });
});
