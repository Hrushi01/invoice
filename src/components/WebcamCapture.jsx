import React from "react";
import Webcam from "react-webcam";
import { Button } from "@mui/material";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

const WebcamCapture = (props) => {
  const { setpicture } = props;
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
      <div className="">
        <div className="border-2 border-gray-600 flex justify-center items-center w-full">
          <Webcam
            audio={false}
            //   height={720}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            //   width={1280}
            onUserMedia={onuser}
            videoConstraints={videoConstraints}
          />
        </div>
        <div className="flex l justify-evenly p-5 ">
          <Button variant="contained" onClick={capture}>
            Capture
          </Button>
          <Button variant="contained" onClick={() => setpicture(null)}>
            Retake
          </Button>
        </div>
      </div>
    </>
  );
};
export default WebcamCapture;
