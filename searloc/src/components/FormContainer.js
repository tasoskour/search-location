import React, { Component } from 'react';
import FormComponent from './FormComponent'
class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      isLoading: false,
      keyword:"noyl",
      language:"en",
      timeout:null
    };
    this.getEntries=this.getEntries.bind(this)
    this.getKeyword = this.getKeyword.bind(this);
    this.clicked=this.clicked.bind(this);
    this.timeout=this.timeout.bind(this);
    this.clearTimer=this.clearTimer.bind(this);

}

getEntries(props){
var API = 'http://35.180.182.8/Search?keywords='+this.state.keyword+'&language='+this.state.language+'&limit=20';
  fetch(API)
  .then(response => {
/*Responses*/
          if(response.status ===400){
              console.log("failed "+this.state.keyword+" "+this.state.language);
this.setState({ entries: [], isLoading: false })
             }
          else if(response.status ===500)
            {  console.log("Server error");
            }
          else if(response.status ===200){
              console.log("Success:"+this.state.keyword+" "+this.state.language);
            }
      return  (response.json())
        })
  .then(data => {console.log(this.state.entries)
      return(this.setState({ entries: data.entries, isLoading: false }))});

  }

getKeyword() {
        this.getLanguage();
        this.setState({keyword:document.getElementById("userInput").value});
         console.log("KEYWORD")

          return false}
getLanguage(){
  if (/^[a-zA-Z]+$/.test(document.getElementById("userInput").value))
   {
this.setState({language:"en"})
}
//Greek
else if(/^[A-Za-z\u0391-\u03C9]*$/.test(document.getElementById("userInput").value))
{
this.setState({language:"el"})
}
  console.log(this.state.language);

}
timeout(){
  var timeout=setTimeout(this.getKeyword,3000);
    console.log("Timer:"+timeout)
      this.setState({timeout:timeout})
      return false
          }

clearTimer(){
  clearTimeout(this.state.timeout);

            return false}

clicked(){
    var text=document.getElementById("userInput").value
  var URL="https://www.google.com/search?q="+text
  window.open(URL);

  return false;
  }
  componentDidMount(){
    document.getElementById("button").disabled=true;

  }

componentDidUpdate(prevProps, prevState)  {
  document.getElementById("button").removeAttribute("disabled");
  if(this.state.entries.length===0||this.state.keyword.length===1){
      document.getElementById("button").disabled=true;
    }
  else {

    }
  if((prevState.keyword!==this.state.keyword && prevProps.keyword!==this.state.keyword)
  ||
  (prevState.keyword==="noyl"&& prevProps.keyword==="noyl")){
  this.getEntries(this.state.keyword)
    }
}

render() {

  var { entries, isLoading } = this.state;
     if (isLoading) {
       return <p>Loading ...</p>;
     }

    return (<div>
    <FormComponent getKeyword={this.timeout} getKeyword2={this.clearTimer} clicked={this.clicked} entries={entries} />

  </div>
    );
  }
}
export default FormContainer;
