import * as Yup from "yup";

export const schema = Yup.object({
  name: Yup.string().min(2, "Required").max(40).required("Required"),
  address: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),

  pin: Yup.number()
    .typeError("Invalid")
    .positive("Invalid")
    .max(999999, "Invalid")
    .required("Required"),

  holdername: Yup.string().min(2).max(25).required("Required"),
  accnumber: Yup.number().typeError("Invalid").required("Required"),
  IFSC: Yup.string().required("Required"),
  bankname: Yup.string().required("Required"),

  clientname: Yup.string().min(2, "Required").required("Required"),
  clientaddress: Yup.string().required("Required"),
  clientstate: Yup.string().required("Required"),
  clientpin: Yup.number()
    .typeError("Invalid")
    .positive("Invalid")
    .max(999999, "Invalid")
    .required("Required"),
  invoicenumber: Yup.number().typeError("Invalid").required("Required"),
  // capacha: Yup.boolean().isTrue("Incorrect").required("Required"),
  list: Yup.array(
    Yup.object({
      quantity: Yup.number().min(1, "Invalid").required("Required"),
      description: Yup.string().required("Required"),
    })
  ),
});
