import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { useReactToPrint } from "react-to-print";
import Invoice2 from "../routes/invoice/template2";
import { act } from "react-dom/test-utils";

const picture = "https://example.com/logo.png";
jest.mock("react-to-print", () => ({
  useReactToPrint: jest.fn(),
}));

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
  // items: [
  //   { name: "Item 1", quantity: 2, price: 10 },
  //   { name: "Item 2", quantity: 1, price: 20 },
  // ],

  list: [
    {
      quantity: 4,
      description: "Something...",
      price: 5,
      total: null,
    },
  ],
};

describe("Template2 check", () => {
  it("renders the component", () => {
    const history = createMemoryHistory({ initialEntries: ["/template2"] });

    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} picture={picture} />
      </Router>
    );
    expect(screen.getByTestId("name")).toHaveTextContent("Hrushikesh");
    expect(screen.getByTestId("address")).toHaveTextContent("B1-101");
    expect(screen.getByTestId("state")).toHaveTextContent("Maharashtra");
    expect(screen.getByTestId("pincode")).toHaveTextContent("Pincode-411028");
    expect(screen.getByTestId("innumber")).toHaveTextContent("11451");
    expect(screen.getByTestId("indate")).toHaveTextContent("22/06/2001");
    expect(screen.getByTestId("total")).toHaveTextContent("$20");
  });
  it("Logo check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template2"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
  });
  it("indate check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const indate = screen.getByTestId("indate");
    expect(indate).toBeInTheDocument();
  });
  it("innumber check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const innumber = screen.getByTestId("innumber");
    expect(innumber).toBeInTheDocument();
  });
  it("pincode check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const pincode = screen.getByTestId("pincode");
    expect(pincode).toBeInTheDocument();
  });
  it("state check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const state = screen.getByTestId("state");
    expect(state).toBeInTheDocument();
  });

  it("address check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const address = screen.getByTestId("address");
    expect(address).toBeInTheDocument();
  });
  it("name check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const name = screen.getByTestId("name");
    expect(name).toBeInTheDocument();
  });
  it("table check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
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

  it("Total check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const sum = screen.getByTestId("sum");
    expect(sum).toBeInTheDocument();

    const tax = screen.getByTestId("tax");
    expect(tax).toBeInTheDocument();

    const total = screen.getByTestId("totalt");
    expect(total).toBeInTheDocument();
  });
  it("Footer check", () => {
    const history = createMemoryHistory({ initialEntries: ["/template1"] });
    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} />
      </Router>
    );
    const hname = screen.getByTestId("hname");
    expect(hname).toBeInTheDocument();

    const bankname = screen.getByTestId("bankname");
    expect(bankname).toBeInTheDocument();

    const accnum = screen.getByTestId("accnum");
    expect(accnum).toBeInTheDocument();
  });

  it("should render a Back button that navigates to /templates when clicked", () => {
    const mockNavigate = jest.fn();

    const history = createMemoryHistory({ initialEntries: ["/template2"] });

    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} picture={picture} navigate={mockNavigate} />
      </Router>
    );

    const backButton = screen.getByRole("button", { name: "Back" });
    backButton.onclick = mockNavigate;
    act(() => {
      backButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mockNavigate).toHaveBeenCalled();
  });

  it("should render an Edit details button that navigates to / when clicked", () => {
    const mockNavigate = jest.fn();

    const history = createMemoryHistory({ initialEntries: ["/template2"] });

    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} picture={picture} navigate={mockNavigate} />
      </Router>
    );

    const editBut = screen.getByRole("button", { name: "Edit details" });
    editBut.onclick = mockNavigate;
    act(() => {
      editBut.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(mockNavigate).toHaveBeenCalled();
  });

  it("should render a Print Invoice button that calls useReactToPrint hook when clicked", () => {
    const mockUseReactToPrint = jest.fn();
    useReactToPrint.mockImplementation(() => mockUseReactToPrint);
    const history = createMemoryHistory({ initialEntries: ["/template2"] });

    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} picture={picture} />
      </Router>
    );
    const printInvoiceButton = screen.getByTestId("print-invoice-button");

    fireEvent.click(printInvoiceButton);

    expect(mockUseReactToPrint).toHaveBeenCalled();
  });

  it("handel print", () => {
    const handelprint = jest.fn();
    const history = createMemoryHistory({ initialEntries: ["/template2"] });

    render(
      <Router location={history.location} children={history}>
        <Invoice2 data={data} picture={picture} />
      </Router>
    );
    const printInvoiceButton = screen.getByTestId("print-invoice-button");

    printInvoiceButton.onclick = handelprint;
    act(() => {
      printInvoiceButton.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    expect(handelprint).toHaveBeenCalled();
  });
});
