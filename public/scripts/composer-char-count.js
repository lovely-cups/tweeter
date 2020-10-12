
//Jquery function for tweeter character count
$(document).ready(function() {
let count = document.getElementById("counter")
let text = document.getElementById("test")
text.onkeyup = function () {
  //increment counter
  count.innerHTML--;

  //change font if more than total character count
if(count.innerHTML < 0){
    $('.counter').addClass('negative')
} else if(count.innerHTML > 0){
  $('.counter').removeClass('negative')
}
//error shown if too many characters
if(count.innerHTML < 0){
  $(".error").slideToggle(1000);
}
if(count.innerHTML < 0){
  $("#submitTweet input").prop("disabled", false);
}
}
});