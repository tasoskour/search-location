import React, { Component } from 'react';
import './App.css';
const API = 'http://35.180.182.8/Search?keywords=athens&language=en&limit=10';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [],
      isLoading: false,
    };
  }
  componentDidMount() {
     this.setState({ isLoading: true });
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ entries: data.entries, isLoading: false }));
  }
  render() {
    const { entries, isLoading } = this.state;
     if (isLoading) {
       return <p>Loading ...</p>;
     }
    return (
      <div>
        <form className="search-form">
         <input type="search" value="" placeholder="Search" className="search-input" />
         <button type="submit" className="search-button"/>
         </form>
      <ul>
        {entries.map(entry =>
          <li key={entry.name}>
{entry.name}
          </li>
        )}
      </ul>
    </div>
    );
  }
}
export default App;
