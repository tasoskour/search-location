import React, { Component } from 'react';

class Fetch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isLoading: false,
      keyword: " ",
      language:" "
    };
this.getKeyword=this.getKeyword.bind(this)
}

  getKeyword(props){
//this.setState({ keyword: "Athens"})
    var API = 'http://35.180.182.8/Search?keywords='+this.props.keyword+'&language='+this.props.language+'&limit=5';
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ entries: data.entries, isLoading: false }));
  }

componentDidUpdate(prevProps)  {
if(prevProps.keyword!==this.props.keyword){
  this.getKeyword(this.props.keyword)
}
}
clicked(){


}
render() {
  var { entries, isLoading } = this.state;
     if (isLoading) {
       return <p>Loading ...</p>;
     }
    return (
      <div >
        <form>
      <ul>
        {entries.map(entry =>

          <li key={entry.name} onClick={()=>document.getElementById("userInput").value=entry.name}>
            {entry.name}
          </li>
        )}
      </ul>
</form>
    </div>
    );
  }
}
export default Fetch;
