import React from 'react';
import NoResults from './NoResults';
import Photo from './Photo';

//Container to house all the Photo components.  returns the no results page if no images are returned from Flickr.
export default function PhotoContainer (props) {
  const results = props.photos;
  let photos;

  //If there are no results this loads the no results page
  if (results.length > 0) {
    photos = results.map(photo => <Photo key={photo.id} id={photo.id} secret={photo.secret} server={photo.server}/>);
  } else {
    photos = <NoResults />;
  }

  return (
    <div className="photo-container">
      <h2>{props.searchTerm}</h2>
      <ul>
        {photos}
      </ul>
    </div>
  );
}