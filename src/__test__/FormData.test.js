import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Formik, Form, FieldArray } from "formik";
import { cleanup } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";

import { createMemoryHistory } from "history";
import FormData from "../routes/form";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { data } from "autoprefixer";
Enzyme.configure({ adapter: new Adapter() });

describe("FormData check", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  const initialval = {
    name: "",
    address: "",
    state: "",
    city: "",
    pin: "",
    file: null,

    holdername: "",
    accnumber: "",
    IFSC: "",
    bankname: "",

    clientname: "",
    clientaddress: "",
    clientstate: "",
    clientpin: "",
    invoicenumber: "",
    invoicedate: "",

    list: [
      {
        quantity: 5,
        description: "vfd",
        price: 4,
      },
    ],
  };
  it("Name check", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history} data={initialval}>
        <FormData />
      </Router>
    );

    const text = screen.getByText("Name:");
    expect(text).toBeInTheDocument();

    const ele = screen.getByPlaceholderText("Name");
    expect(ele).toBeInTheDocument();
  });

  it("Picture check", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history}>
        <FormData />
      </Router>
    );
    const ele = screen.getByAltText("img");

    expect(ele).toBeInTheDocument();
  });

  it("Address  check", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history}>
        <FormData />
      </Router>
    );
    const text = screen.getByText("Address:");
    expect(text).toBeInTheDocument();

    const add = screen.getAllByText("Flat No,Building,etc:");
    expect(add).toHaveLength(2);

    const addin = screen.getByPlaceholderText("Enter your address");
    expect(addin).toBeInTheDocument();

    const state = screen.getAllByText("State:");
    expect(state).toHaveLength(2);

    const statein = screen.getByPlaceholderText("Enter your state");
    expect(statein).toBeInTheDocument();

    const pin = screen.getAllByText("PinCode:");
    expect(pin).toHaveLength(2);

    const pinin = screen.getByPlaceholderText("Enter your pincode");
    expect(pinin).toBeInTheDocument();
  });

  it("Account  check", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history}>
        <FormData />
      </Router>
    );
    const text = screen.getByText("Account Details:");
    expect(text).toBeInTheDocument();

    const accname = screen.getByText("Account Holder Name:");
    expect(accname).toBeInTheDocument();

    const accnamein = screen.getByPlaceholderText("Account holder name");
    expect(accnamein).toBeInTheDocument();

    const accnum = screen.getByText("Bank Account Number:");
    expect(accnum).toBeInTheDocument();

    const accnumin = screen.getByPlaceholderText("Enter bank IFSC code");
    expect(accnumin).toBeInTheDocument();

    const ifsc = screen.getByText("Bank IFSC code:");
    expect(ifsc).toBeInTheDocument();

    const bankname = screen.getByText("Bank Name:");
    expect(bankname).toBeInTheDocument();

    const banknamein = screen.getByPlaceholderText("Enter bank name");
    expect(banknamein).toBeInTheDocument();

    const pinin = screen.getByPlaceholderText("Enter your pincode");
    expect(pinin).toBeInTheDocument();
  });

  it("Client  Address", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history}>
        <FormData />
      </Router>
    );
    const text = screen.getByText("Client Address:");
    expect(text).toBeInTheDocument();

    const clientaddressin = screen.getByPlaceholderText("Enter Client address");
    expect(clientaddressin).toBeInTheDocument();

    const clientstate = screen.getByPlaceholderText("Enter clientstate");
    expect(clientstate).toBeInTheDocument();

    const clientpinin = screen.getByPlaceholderText("Enter client pincode");
    expect(clientpinin).toBeInTheDocument();
  });

  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  // //   helooooooo
  it("renders correctly with initial values", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    render(
      <Router location={history.location} children={history} data={initialval}>
        <FormData />
      </Router>,
      container
    );

    console.log("ggggggggggg", container);
    const ele = await screen.findByTestId("fieldarrytext");

    //   const nameInput = screen.getByLabelText("Name");
    //   const addressInput = screen.getByLabelText("Address");
    //   const stateInput = screen.getByLabelText("State");
    //   const cityInput = screen.getByLabelText("City");
    //   const pinInput = screen.getByLabelText("Pin");
    //   const holdernameInput = screen.getByLabelText("Holder Name");
    //   const accnumberInput = screen.getByLabelText("Account Number");
    //   const IFSCInput = screen.getByLabelText("IFSC");
    //   const banknameInput = screen.getByLabelText("Bank Name");
    //   const clientnameInput = screen.getByLabelText("Client Name");
    //   const clientaddressInput = screen.getByLabelText("Client Address");
    //   const clientstateInput = screen.getByLabelText("Client State");
    //   const clientpinInput = screen.getByLabelText("Client Pin");
    //   const invoicenumberInput = screen.getByLabelText("Invoice Number");
    //   const invoicedateInput = screen.getByLabelText("Invoice Date");

    //   expect(nameInput).toBeInTheDocument();
    //   expect(addressInput).toBeInTheDocument();
    //   expect(stateInput).toBeInTheDocument();
    //   expect(cityInput).toBeInTheDocument();
    //   expect(pinInput).toBeInTheDocument();
    //   expect(holdernameInput).toBeInTheDocument();
    //   expect(accnumberInput).toBeInTheDocument();
    //   expect(IFSCInput).toBeInTheDocument();
    //   expect(banknameInput).toBeInTheDocument();
    //   expect(clientnameInput).toBeInTheDocument();
    //   expect(clientaddressInput).toBeInTheDocument();
    //   expect(clientstateInput).toBeInTheDocument();
    //   expect(clientpinInput).toBeInTheDocument();
    //   expect(invoicenumberInput).toBeInTheDocument();
    //   expect(invoicedateInput).toBeInTheDocument();
  });
  //   <Formik initialValues={initialValues}>
  //     <Form>
  //       <FieldArray name="list" />
  //     </Form>
  //   </Formik>

  // expect(screen.getByLabelText("Item Description:")).toBeInTheDocument();
  // expect(screen.getByLabelText("Quantity:")).toBeInTheDocument();
  // expect(screen.getByLabelText("Price:")).toBeInTheDocument();
  // expect(screen.getByText("item 1")).toBeInTheDocument();
  // expect(screen.getByText("item 2")).toBeInTheDocument();
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo
  //   helooooooo

  // it("Table check", () => {
  //   const history = createMemoryHistory({ initialEntries: ["/"] });
  //   render(
  //     <Router location={history.location} children={history}>
  //       <FormData />
  //     </Router>
  //   );
  // const text = screen.getByText("Item Description:");

  // expect(text).toBeInTheDocument();

  // const text = screen.getByText("Account Details:");
  // expect(text).toBeInTheDocument();

  // const accname = screen.getByText("Account Holder Name:");
  // expect(accname).toBeInTheDocument();

  // const accnamein = screen.getByPlaceholderText("Description");
  // expect(accnamein).toBeInTheDocument();

  // const accnum = screen.getByText("Bank Account Number:");
  // expect(accnum).toBeInTheDocument();

  // const accnumin = screen.getByPlaceholderText("Enter bank IFSC code");
  // expect(accnumin).toBeInTheDocument();

  // const ifsc = screen.getByText("Bank IFSC code:");
  // expect(ifsc).toBeInTheDocument();

  // const bankname = screen.getByText("Bank Name:");
  // expect(bankname).toBeInTheDocument();

  // const banknamein = screen.getByPlaceholderText("Enter bank name");
  // expect(banknamein).toBeInTheDocument();

  // const pinin = screen.getByPlaceholderText("Enter your pincode");
  // expect(pinin).toBeInTheDocument();
  //   });

  it("should render a disabled Submit button when check is false", () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
      <Router location={history.location} children={history} data={initialval}>
        <FormData check={false} values={{}} />
      </Router>
    );

    // Check if the submit button is disabled
    const submitButton = screen.getByTestId("sub2");
    expect(submitButton).toBeDisabled();
  });
});
