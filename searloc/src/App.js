import React, { Component } from 'react';
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
      <ul>
        {entries.map(entry =>
          <li key={entry.name}>
{entry.name}
          </li>
        )}
      </ul>
    );
  }
}
export default App;
