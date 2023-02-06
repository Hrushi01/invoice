// import React from "react";
// import { render, act, screen } from "@testing-library/react";
// import WebcamCapture from "../components/AllCam";

// describe("WebcamCapture component", () => {
//   it("renders all video input devices", async () => {
//     const devices = [
//       { deviceId: "device-1", kind: "videoinput" },
//       { deviceId: "device-2", kind: "videoinput" },
//     ];
//     navigator.mediaDevices = {
//       enumerateDevices: jest.fn(() => Promise.resolve(devices)),
//     };
//     render(<WebcamCapture />);
//     const webcams = await screen.findAllByTestId("webcam");
//     expect(webcams.length).toBe(2);
//   });
// });
