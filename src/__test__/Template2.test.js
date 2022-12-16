import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import Invoice2 from "../routes/invoice/template2";

describe("Template2 check", () => {
  it("Logo check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template2"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
  it("indate check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
  it("innumber check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
    const innumber = screen.getByTestId("innumber");
    expect(innumber).toBeInTheDocument();
  });
  it("pincode check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
    const pincode = screen.getByTestId("pincode");
    expect(pincode).toBeInTheDocument();
  });
  it("state check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
    const state = screen.getByTestId("state");
    expect(state).toBeInTheDocument();
  });

  it("address check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
  });
  it("name check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2
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
    const name = screen.getByTestId("name");
    expect(name).toBeInTheDocument();
  });
});
