import React, { Component } from 'react';
import './App.css';
var keyword='jamaica'
const API = 'http://35.180.182.8/Search?keywords='+keyword+'&language=en&limit=100';


class App extends Component {
  constructor(props) {
    super(props);
       this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(e) {
       e.preventDefault();
       var title = this.title;
//English
      if (/^[a-zA-Z]+$/.test(title)) {
       console.log(/^[a-zA-Z]+$/.test(title));
     }
//Greek
   else if(/^[A-Za-z\u0391-\u03C9]*$/.test(title))
   {
   console.log(/^[a-zA-Z]+$/.test(title));
 }
        }

othername() {
           var input = document.getElementById("userInput").value;

           keyword=input
        alert(keyword);
       }


  render() {
    const { entries, isLoading } = this.state;
     if (isLoading) {
       return <p>Loading ...</p>;
     }
    return (
      <div>

<input type="text" id="userInput" className="form-control" onKeyUp={this.othername} name="title" />
 <input  type="submit" onClick={this.othername}/>

      <h1>Hello</h1>
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
