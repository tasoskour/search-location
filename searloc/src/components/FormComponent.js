import React from 'react';

function FormContainer(props){


  return (
  <div>
  <input type="text" id="userInput" onChange={props.getKeyword} autoComplete="off"/>
  <button type="button" id="button" onClick={props.clicked} >Submit</button>
<form className="form">



<ul id="ul" className="ulist">
  {props.entries.map(entry =>
  (
    <li id={entry.name} className="li" key={entry.name} onClick={()=>{
      document.getElementById("userInput").value=entry.name
  }}
onMouseOver={()=>  document.getElementById(entry.name).style.backgroundColor="red"}
onMouseOut={()=> { document.getElementById(entry.name).style.backgroundColor="white"
} }
  >
      {entry.name}
    </li>)
  )

}
</ul>

</form>
    </div>
  )
}
export default FormContainer
