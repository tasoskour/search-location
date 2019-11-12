import React from "react"
import Fetch from "./Fetch"
class Keyword extends React.Component{

constructor(){
  super()

  this.state={
    keyword:"",
    display:"No results"                }

  this.getKeyword = this.getKeyword.bind(this);
             }

getKeyword() {

      this.setState({keyword:document.getElementById("userInput").value});
       }

render(){

  return(
    <div>

  <form>
  <input type="text" id="userInput" onKeyUp={this.getKeyword} />
  <textarea   onChange={this.getKeyword} value= {this.state.display}  />
   <input  type="submit" onClick={this.getKeyword}/>

   </form>
   <Fetch/>
   </div>
 )
}

}
export default Keyword
