import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import { schema } from "../schema/schema";

import { Formik, FieldArray } from "formik";

import FieldarrayComp from "../components/FieldarrayComponent";
import { act } from "react-dom/test-utils";

describe("Fieldarray", () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  const props = {
    values: {
      list: [
        {
          quantity: 5,
          description: "Test 1",
          price: 5,
        },
        {
          quantity: 5,
          description: "Test 1",
          price: 5,
        },
      ],
    },
  };

  it("should add a new item when the 'Add Item+' button is clicked", () => {
    render(
      <Formik initialValues={props} validationSchema={schema}>
        <FieldArray
          name="list"
          render={(arrayhelpers) => {
            return (
              <>
                <FieldarrayComp props={props} arrayhelpers={arrayhelpers} />
              </>
            );
          }}
        />
      </Formik>,

      container
    );

    const addBtn = screen.getByRole("button", { name: "Add Item+" });

    act(() => {
      addBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    console.log("ccjcjcj", addBtn);
    expect(screen.getAllByTestId("item")).toHaveLength(2);
  });

  it("should remove a new item when the 'x' button is clicked", () => {
    render(
      <Formik initialValues={props} validationSchema={schema}>
        <FieldArray
          name="list"
          render={(arrayhelpers) => {
            return <FieldarrayComp props={props} arrayhelpers={arrayhelpers} />;
          }}
        />
      </Formik>,

      container
    );

    const xBtn = screen.getByRole("button", { name: "❌" });

    act(() => {
      xBtn.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    console.log("ccjcjcj", fireEvent.click(xBtn));
    expect(screen.getAllByTestId("item")).toHaveLength(2);
  });
});
