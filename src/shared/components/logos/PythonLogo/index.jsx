import React from "react";
import PythonImg from "../../../resources/python.png";

export default function PythonLogo({ className, ...otherProps }) {
  return (
    <div className={className} {...otherProps}>
      <img src={PythonImg} />
    </div>
  );
}
