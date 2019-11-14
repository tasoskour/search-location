import React from 'react';

function FormContainer(props){


  return (
  <div>
<form>

<input type="text" id="userInput" onChange={props.getKeyword} autoComplete="off"/>
<button type="button" id="button" onClick={props.clicked} >Submit</button>

<ul>
  {props.entries.map(entry =>

    <li key={entry.name} onClick={()=>document.getElementById("userInput").value=entry.name}>
      {entry.name}
    </li>
  )}
</ul>

</form>
    </div>
  )
}
export default FormContainer
