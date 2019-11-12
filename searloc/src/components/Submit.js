import React from "react"

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

function Submit(props){

  return (
    <form>
    <input type="text" id="userInput" onKeyUp={this.getKeyword} />
     <input  type="submit" onClick={this.getKeyword}/>
     </form>)
  )
}


export default Submit
//<form>
// <input type="text" id="userInput" onKeyUp={this.getKeyword} />
//  <textarea   onChange={getKeyword} value= {this.state.display}  />
// <input  type="submit" onClick={this.getKeyword}/>

//   </form>
