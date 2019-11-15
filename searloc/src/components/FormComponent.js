import React from 'react';

function FormContainer(props){

  return (
<div className="div">
  <h1 className="h1">What place are you lookin for?</h1>
  <input type="text" id="userInput" onChange={props.getKeywordTimer} onKeyDown={props.clearTimer} autoComplete="off"/>
  <button type="button" id="button" onClick={props.clicked} >SEARCH</button>
  <ul id="ul" className="ulist">
    {props.entries.map(entry =>
      (
    <li id={entry.name} className="li" key={entry.name} onClick={()=>{
      document.getElementById("userInput").value=entry.name
  }}
onMouseOver={()=>  document.getElementById(entry.name).style.backgroundColor="red"}
onMouseOut={()=> { document.getElementById(entry.name).style.backgroundColor="lightgrey"
}}
  >
      {entry.name}
    </li>)
  )
}
</ul>

    </div>
  )
}
export default FormContainer
