"use client";

import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh]">
      <PuffLoader size={60} className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px]" color="red" />
    </div>
  );
};

export default Loader;
