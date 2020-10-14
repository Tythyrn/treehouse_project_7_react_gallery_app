import React from 'react';
import NoResults from './NoResults';
import Photo from './Photo';

export default function PhotoContainer (props) {
  const results = props.photos;
  let photos;

  if (results.length > 0) {
    photos = results.map(photo => <Photo key={photo.id} id={photo.id} secret={photo.secret} server={photo.server}/>);
  } else {
    photos = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}