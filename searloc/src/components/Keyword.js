import React from "react"
import Fetch from "./Fetch"
class Keyword extends React.Component{

constructor(){
  super()
  this.state={
keyword:"Hong Kong"
           }
            this.getKeyword = this.getKeyword.bind(this);
             }

getKeyword() {
            this.setState({keyword:document.getElementById("userInput").value});
        console.log(this.state.keyword);

}
render(){
  return(

    <div>

  <form>
  <input type="text" id="userInput" onKeyUp={this.getKeyword} />
   <input  type="submit" onClick={this.getKeyword}/>
   </form>
  <Fetch keyword={this.state.keyword}/>
</div>
 )
}

}
export default Keyword
