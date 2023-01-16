import React from "react";
import Webcam from "react-webcam";
import IconButton from "@mui/material/IconButton";

import { Box, Button, Modal, Typography } from "@mui/material";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const { camon, setCamOn, setpicture, picture } = props;
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setpicture(imageSrc);
  }, [webcamRef, setpicture]);

  const onuser = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className="items-center">
        <Modal
          open={camon}
          onClose={() => {
            setCamOn(false);
          }}>
          <Box className="  left-1/2 right-1/2  translate-x-1/2 translate-y-1/3 bg-orange-50 opacity-90 border-2 border-gray-600 w-1/2 p-5">
            <div>
              <div className="  left-2 top-2">
                <IconButton
                  color="error"
                  component="label"
                  onClick={() => {
                    setCamOn(false);
                  }}>
                  X
                </IconButton>
              </div>
              <div className="flex justify-center text-center">
                <Typography variant="h5">
                  Please have a clear Background.
                </Typography>
              </div>
              <div className="  p-1 flex justify-center text-center">
                <div className="p-1 border-2 border-gray-600 ">
                  {picture ? (
                    <div className="">
                      <img
                        src={
                          picture
                            ? picture
                            : "https://via.placeholder.com/150.png?text=Logo"
                        }
                        alt="img"
                        width={450}
                      />
                    </div>
                  ) : (
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={450}
                      onUserMedia={onuser}
                      videoConstraints={videoConstraints}
                    />
                  )}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-5  mt-4  ">
                <Button variant="contained" onClick={capture}>
                  Capture
                </Button>
                <Button variant="contained" onClick={() => setpicture(null)}>
                  Retake
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    setCamOn(false);
                  }}>
                  Close
                </Button>
              </div>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};
export default WebcamCapture;
