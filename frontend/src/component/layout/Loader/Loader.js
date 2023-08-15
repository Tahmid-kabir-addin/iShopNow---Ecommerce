import React from "react";
import "./Loader.css";
import ClipLoader from "react-spinners/ClipLoader";

const Loader = () => {
  return (
    <div className="loading">
      <ClipLoader 
        size={200}
      />
    </div>
  );
};

export default Loader;
