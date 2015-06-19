
// var divElements = document.getElementsByClassName('divStyle')

// console.log(divElements)
// for(var i=0; i<= divElements.length; i++){
//   divElements[i].onclick = function(event){
//     event = event || window.event; //ie8 get the event object

//     if(event.stopPropagation){ // if this is supported use this ie9 other browsers
//       event.stopPropagation();
//     }
//     else {
//       event.cancelBubble = true // else use this one
//     }
//     this.style.borderColor = "red";
//     alert(this.getAttribute("id") + " border color changed")
//   }
// }


// // map function
// var myArray = [4,3,5,2,1]

// var newArray= myArray.map(function(num){
//   return num * 2;
// })

// console.log(myArray)
// console.log(newArray)

// handlebar example

$(document).ready(function(){

  //one we get our template
  var source= $("#new_template").html();
  //two we create the template
  var template = Handlebars.compile(source);

  var context = {
    title: "this is our title from far away",
    body: "this is our sexy body"
  }

  var el_html = template(context);

  $("#render_one").html(el_html);


})