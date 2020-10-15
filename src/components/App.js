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
import Error from './Error';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      catPhotos: [],
      dogPhotos: [],
      computerPhotos: [],
      searchTerm: '',
      loading: true
    };
  } 

  //Runs API search for starter buttons
  componentDidMount () {
    this.performCatSearch();
    this.performDogSearch();
    this.performComputerSearch();
  }

  //PerformSearch takes the queried search term and calls the Flickr API to get a response
  performSearch = (query) => {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          photos: response.data.photos.photo,
          loading: false,
          searchTerm: query
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  //These are the searches for the hardcoded options.  Not a fan of the repetition but unsure how to better consolidate this.
  performCatSearch = (query = 'cats') => {
    this.setState({loading: true});
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

  //*See above
  performDogSearch = (query = 'dog') => {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          dogPhotos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  //*See above
  performComputerSearch = (query = 'computer') => {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({ 
          computerPhotos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
    });
  }

  //Renders the App depending on the current path
  render() {
    return (
      <Router>
      <div className="container">
        <SearchForm search={this.performSearch}/>
        <MainNav search={this.performSearch}/>
        {
        (this.state.loading)
          ? <p>Loading...</p>
          :<Switch>   {/**This switch goes through and checks each path for the correct one and loads it.  If it finds none then gives a 404 error */}
            <Route exact path="/" render={() => <PhotoContainer photos={this.state.catPhotos} searchTerm={this.state.searchTerm}/> } />
            <Route path="/cats" render={() => <PhotoContainer photos={this.state.catPhotos} searchTerm={'cats'}/> } />
            <Route path="/dogs" render={() => <PhotoContainer photos={this.state.dogPhotos} searchTerm={'dogs'}/> } />
            <Route path="/computers" render={() => <PhotoContainer photos={this.state.computerPhotos} searchTerm={'computers'}/> } />
            <Route path="/search/:query" render={() => <PhotoContainer photos={this.state.photos} searchTerm={this.state.searchTerm}/> } />
            <Route component={Error} />
          </Switch>
        }
      </div>
      </Router>
    );
  }
}