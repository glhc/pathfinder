import React from 'react';

export default function Circle({data, r, color, setEndpoint, id, conditionals}) {

  const handleClick = (e) => {
    console.log(e);
    setEndpoint(data)
  };


  const idString = () => {
    return id ? id.join(' ') : undefined;
  };

  return (
    <circle
      className="circle"
      cx={data.xPos}
      cy={data.yPos}
      r={r}
      fill={color}
      onClick={handleClick}
      id={idString}
    >
    </circle>
  );
};
