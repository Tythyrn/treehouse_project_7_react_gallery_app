import React from 'react';

//No results page displays of Flickr returns no photos
export default function NoResults () {
  return (
    <li className="not-found">
      <h3>No Results Found</h3>
      <p>You search did not return any results. Please try again.</p>
    </li>
  );
}