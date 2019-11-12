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

render(){
  return(

    <div>

  <form>
  <input type="text" id="userInput" onChange={this.getKeyword} />
   <input  type="submit" onClick={this.getKeyword}/>
   </form>
  <Fetch keyword={this.state.keyword} language={this.state.language}/>
</div>
 )
}

}
export default Keyword
