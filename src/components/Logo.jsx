import React from "react";
import WebcamCapture from "./WebcamCapture";
import { MdDeleteForever } from "react-icons/md";
import { Button } from "@mui/material";

function Logo({ camon, setCamOn, picture, setpicture, img }) {
  return (
    <div>
      <div className="flex flex-col justify-start  p-2 ">
        <label className="flex justify-start font-bold font-serif text-lg text-gray-600 pl-1">
          Logo:
        </label>

        <div className="grid grid-cols-3 relative">
          <div className="flex flex-col     ">
            <div className="flex flex-col w-36 h-36 relative ">
              <img
                data-testid="setimg"
                src={
                  picture
                    ? picture
                    : "https://via.placeholder.com/150.png?text=Logo"
                }
                alt="img"
                className="w-full h-full rounded-full shadow-md"
              />
              <div className="absolute bottom-0 right-0 rounded-full z-10 p-1 bg-white items-center justify-center flex"></div>
              {picture ? (
                <div className="absolute top-0 right-0 rounded-full z-10   bg-transparent items-center justify-center flex">
                  <div
                    data-testid="del"
                    className="  rounded-full cursor-pointer text-2xl bg-white p-0.5 "
                    onClick={() => {
                      setpicture(null);
                    }}
                  >
                    <MdDeleteForever color={"red"} />
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
            <label htmlFor="logoInput" hidden>
              file upload
            </label>
            <input
              ref={img}
              data-testid="imp"
              type="file"
              id="logoInput"
              hidden
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                  setpicture(reader.result);
                };
                reader.readAsDataURL(file);
              }}
            />
            <div className="flex  justify-between p-3  bottom-0 text-center ">
              <Button
                type="button"
                variant="contained"
                onClick={() => {
                  img.current.click();
                }}
              >
                Upload
              </Button>

              <Button
                type="button"
                variant="contained"
                onClick={() => setCamOn(!camon)}
              >
                Click now
              </Button>
            </div>
          </div>
          {}
          <div>
            {camon ? (
              <div data-testid="web" className="flex   ">
                <WebcamCapture
                  camon={camon}
                  setCamOn={setCamOn}
                  picture={picture}
                  setpicture={setpicture}
                />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
