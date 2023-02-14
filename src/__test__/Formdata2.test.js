import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FormData from "../routes/form";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Formik } from "formik";
import { schema } from "../schema/schema";

describe("YourComponent", () => {
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

  //   it("should render an enabled Submit button when check is true", () => {
  //     const history = createMemoryHistory({ initialEntries: ["/"] });

  //     render(
  //       <Router location={history.location} children={history} data={initialval}>
  //         <FormData check={true} values={{}} />
  //       </Router>
  //     );
  //     // Check if the submit button is enabled
  //     const submitButton = screen.getByTestId("sub1");
  //     expect(submitButton).toBeInTheDocument();
  //   });

  // it("should call setData when Submit button is clicked", () => {
  //   const mockSetData = jest.fn();
  //   const values = { name: "John", email: "john@example.com" };

  //   const history = createMemoryHistory({ initialEntries: ["/"] });

  //   render(
  //     <Router location={history.location} children={history} data={initialval}>
  //       <FormData check={true} values={initialval} setData={mockSetData} />
  //     </Router>
  //   );

  //   // Click the submit button
  //   const submitButton = screen.getByTestId("sub1");
  //   fireEvent.click(submitButton);

  //   // Check if setData was called with the correct values
  //   expect(mockSetData).toHaveBeenCalledWith(values);
  // });
  // test("enables submit button when form is valid", async () => {
  //   const history = createMemoryHistory({ initialEntries: ["/"] });

  //   render(
  //     <Router location={history.location} children={history} data={initialval}>
  //       <FormData check={false} values={{}} />
  //     </Router>
  //   );
  //   fireEvent.input(screen.getByLabelText("Name:"), {
  //     target: { value: "John Doe" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Email:"), {
  //     target: { value: "johndoe@example.com" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Phone:"), {
  //     target: { value: "123-456-7890" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Address:"), {
  //     target: { value: "123 Main St" },
  //   });
  //   fireEvent.input(screen.getByLabelText("City:"), {
  //     target: { value: "Anytown" },
  //   });
  //   fireEvent.input(screen.getByLabelText("State:"), {
  //     target: { value: "CA" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Zip:"), {
  //     target: { value: "12345" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Account Name:"), {
  //     target: { value: "John Doe" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Account Number:"), {
  //     target: { value: "1234567890" },
  //   });
  //   fireEvent.input(screen.getByLabelText("Routing Number:"), {
  //     target: { value: "123456789" },
  //   });
  //   fireEvent.change(screen.getByLabelText("Type of Account:"), {
  //     target: { value: "checking" },
  //   });
  //   fireEvent.click(
  //     screen.getByLabelText("I agree to the terms and conditions")
  //   );
  //   const submitButton = screen.getByTestId("sub1");
  //   expect(submitButton).toBeEnabled();
  // });

  test("displays error message when name is not provided", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });

    render(
      <Router location={history.location} children={history}>
        <Formik validationSchema={schema} initialValues={datta}>
          {(props) => (
            <FormData
              props={{
                errors: { name: "name is required" },
                touched: { name: true },
              }}
              check={true}
              setData={jest.fn()}
            />
          )}
        </Formik>
      </Router>
    );
    const errorMessage = await screen.findByTestId("name");
    console.log("fr", errorMessage);
    expect(errorMessage).toHaveTextContent("name is required");
  });

  const datta = {
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
    capacha: null,

    list: [
      {
        quantity: 4,
        description: "dndndn",
        price: 5,
        total: null,
      },
    ],
  };

  test("onsubmit visible", async () => {
    const history = createMemoryHistory({ initialEntries: ["/"] });
    // const datta = {datta} // insert test data here

    render(
      <Router location={history.location} children={history}>
        <Formik validationSchema={schema} initialValues={datta}>
          {(props) => (
            <FormData props={props} check={true} setData={jest.fn()} />
          )}
        </Formik>
      </Router>
    );

    const submitButton = screen.getByTestId("sub1");
    expect(submitButton).toBeInTheDocument();
  });
});
