export const clicked=()=>{
    var text=document.getElementById("userInput").value
  var URL="https://www.google.com/search?q="+text
  window.open(URL);

  return false;
  }
