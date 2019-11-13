import React from "react"
import Fetch from "./Fetch"


class Keyword extends React.Component{

constructor(){
  super()
  this.state={
keyword:" ",
language:" "
           }
this.getKeyword = this.getKeyword.bind(this);
this.clicked=this.clicked.bind(this);
             }

getKeyword() {
      this.setState({keyword:document.getElementById("userInput").value});

        if (/^[a-zA-Z]+$/.test(this.state.keyword))
         {
   this.setState({language:"en"})
}
//Greek
else if(/^[A-Za-z\u0391-\u03C9]*$/.test(this.state.keyword))
{
this.setState({language:"el"})
}
        console.log(this.state.language);
}

clicked(){
  var text=document.getElementById("userInput").value
var URL="https://www.google.com/search?q="+text
window.open(URL);

return false;
}

render(){
  return(
    <div>
  <form className="form" >
  <input type="text" id="userInput" onChange={this.getKeyword} autoComplete="off"/>
<button type="button" onClick={this.clicked}>Submit</button>
   </form>
  <Fetch keyword={this.state.keyword} language={this.state.language}/>
</div>
 )
}

}
export default Keyword
