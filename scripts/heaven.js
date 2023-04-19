var myIndex = 0;
heaven();

function heaven() {
  var i;
  var x = document.getElementsByClassName("images");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(heaven, 2000); 
}