
var divElements = document.getElementsByClassName('divStyle')

for(var i=0; i<= divElements.length; i++){
  divElements[i].onclick = function(event){
    event = event || window.event; //ie8 get the event object

    if(event.stopPropagation){ // if this is supported use this ie9 other browsers
      event.stopPropagation();
    }
    else {
      event.cancelBubble = true // else use this one
    }
    this.style.borderColor = "red";
    alert(this.getAttribute("id") + " border color changed")
  }
}