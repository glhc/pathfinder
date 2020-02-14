import React from 'react';

export default function Circle({data, r, color, setEndpoint, id}) {

  const handleClick = (e) => {
    console.log(e);
    setEndpoint(data)
  };
  return (
    <circle
      className="circle"
      cx={data.xPos}
      cy={data.yPos}
      r={r}
      fill={color}
      onClick={handleClick}
      id={id? id : undefined}
    >
    </circle>
  );
};
