import React from 'react';
import { Tooltip } from 'react-tooltip';

const MyTooltip = ({ id, place = "top" }) => {
  return (
    <Tooltip
      id={id}
      clickable={true}
  
      place={place}
      delayShow={50}
      delayHide={100}
      style={{ zIndex: 9999 }}
    />
  );
};

export default MyTooltip;
