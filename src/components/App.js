import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//API Key
import {apiKey} from '../config';

//App Components
import SearchForm from './SearchForm';
import MainNav from './MainNav';
import PhotoContainer from './PhotoContainer';
import NoResults from './NoResults';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      catPhotos: [],
      dogPhotos: [],
      computerPhotos: [],
      loading: true
    };
  } 

  componentDidMount () {
    this.performCatSearch();
    this.performDogSearch();
    this.performComputerSearch();
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  performCatSearch = (query = 'cats') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          catPhotos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  performDogSearch = (query = 'dog') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          dogPhotos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  performComputerSearch = (query = 'computer') => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          computerPhotos: response.data.photos.photo,
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  render() {
    return (
      <Router>
      <div className="container">
        <SearchForm search={this.performSearch}/>
        <MainNav search={this.performSearch}/>
        <Switch>
          <Route exact path="/" render={() => <PhotoContainer photos={this.state.catPhotos} /> } />
          <Route path="/cats" render={() => <PhotoContainer photos={this.state.catPhotos} /> } />
          <Route path="/dogs" render={() => <PhotoContainer photos={this.state.dogPhotos} /> } />
          <Route path="/computers" render={() => <PhotoContainer photos={this.state.computerPhotos} /> } />
          <Route path="/search/:query" render={() => <PhotoContainer photos={this.state.photos} /> } />
          <Route component={NoResults} />
        </Switch>
      </div>
      </Router>
    );
  }
}