import React, { Component } from 'react';




class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isLoading: false,
      keyword: props.keyword
    };
this.getKeyword=this.getKeyword.bind(this)

  }

  getKeyword(keyword){
    var API = 'http://35.180.182.8/Search?keywords='+keyword+'&language=en&limit=100';
console.log(API)
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ entries: data.entries, isLoading: false }));

  }

componentDidMount() {

  this.getKeyword(this.state.keyword)

}

  render() {

    var { entries, isLoading } = this.state;
     if (isLoading) {
       return <p>Loading ...</p>;
     }

    return (
      <div>

<h1>{this.state.keyword}</h1>

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
export default Fetch;
