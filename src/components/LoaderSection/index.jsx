import React from "react";
import { BeatLoader } from "react-spinners";

const LoaderSection = ({ isLoading }) => {
  return (
    <div className="flex flex-row h-screen justify-center items-center">
      <BeatLoader loading={isLoading} color=" #6b7280" size={14} />
    </div>
  );
};

export default LoaderSection;
