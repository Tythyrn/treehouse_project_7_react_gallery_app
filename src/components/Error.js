import React from 'react';

//Error page that displays when going to a non-existant route
export default function Error () {
  return (
    <li className="not-found">
      <h3>404</h3>
      <p>Could not find the droids you are looking for</p>
    </li>
  );
}