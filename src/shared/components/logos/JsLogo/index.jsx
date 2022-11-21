import React from "react";
import JsImg from "../../../resources/js.png";

export default function JsLogo({ className, ...otherProps }) {
  return (
    <div className={className} {...otherProps}>
      <img src={JsImg} />
    </div>
  );
}
