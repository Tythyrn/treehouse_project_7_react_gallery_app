import React from 'react';
import Gif from './Gif';

export default function PhotoContainer () {
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        <Gif />
        <Gif />
        <Gif />
        <Gif />
      </ul>
    </div>
  );
}