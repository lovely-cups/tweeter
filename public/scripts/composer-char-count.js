

$(document).ready(function() {
let count = document.getElementById("counter")
let text = document.getElementById("test")
text.onkeyup = function () {
  //count.innerHTML = 140;
  count.innerHTML--;
  }
  if(count.innerHTML < 0){
    count.style.color("red");
}
return count;
});