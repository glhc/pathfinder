import React from "react";

export default function Circle({
  data,
  r,
  id,
}) {

  return (
    <circle
      className="circle"
      cx={data.xPos}
      cy={data.yPos}
      r={r}
      id={id ? id : undefined}
    ></circle>
  );
}
