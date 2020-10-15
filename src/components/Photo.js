import React from 'react';

//Small component used to build each image url
export default function Photo (props) {
  return (
    <li>
      <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt="" />
    </li>
  );
}