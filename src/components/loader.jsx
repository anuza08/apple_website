import React from "react";
import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-centre">
        <div className="w-[10vw] h-[10vw] rounded-full">Loading..</div>
      </div>
    </html>
  );
};

export default Loader;
