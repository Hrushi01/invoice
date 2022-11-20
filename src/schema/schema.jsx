import * as Yup from "yup";

export const schema = Yup.object({
  title: Yup.string().required("Required"),
  name: Yup.string().min(2, "Required").max(40).required("Required"),
  address: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  pin: Yup.number().required("Required"),

  holdername: Yup.string().min(2).max(25).required("Required"),
  accnumber: Yup.number().required("Required"),
  IFSC: Yup.string().required("Required"),
  bankname: Yup.string().required("Required"),

  clientname: Yup.string().min(2, "Required").required("Required"),
  clientaddress: Yup.string().required("Required"),
  clientstate: Yup.string().required("Required"),
  clientpin: Yup.number().required("Required"),
  invoicenumber: Yup.number().required("Required"),
});
