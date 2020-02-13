import React from 'react';

export default function Circle(props) {

  const handleClick = (e) => {
    console.log('circle clicked!');
    console.log(props.data);
  }
  return (
    <circle
      cx={props.data.xPos}
      cy={props.data.yPos}
      r={props.r}
      color={props.color}
      onClick={handleClick}
    >
    </circle>
  );
};
