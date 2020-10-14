import React, {Component} from 'react';

//App Components
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <SearchForm />
        <MainNav />
        <PhotoContainer />
        <NoResults />
      </div>
    );
  }
}