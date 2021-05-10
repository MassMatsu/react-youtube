import React from 'react';

import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component {
  onFormSubmit = async (term) => {
    console.log(term);
    const videos = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    console.log(videos)
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
