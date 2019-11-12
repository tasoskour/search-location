import React from "react"



function Submit(props){

  return (
    <form>
    <input type="text" id="userInput" onKeyUp={this.getKeyword} />
     <input  type="submit" onClick={this.getKeyword}/>
     </form>)
  )
}


export default Submit
