
//Jquery function for tweeter character count
$(document).ready(function() {
let countElement = document.getElementById("counter")
let text = document.getElementById("test")
text.onkeyup = function () {
  //increment counter
  let count = $(text).val().length;
  countElement.innerHTML = 140 - count;
  console.log($(text).val().length);

  //change font if more than total character count
if(countElement.innerHTML < 0){
    $('.counter').addClass('negative')
} else if(countElement.innerHTML > 0){
  $('.counter').removeClass('negative')
}
//error shown if too many characters
/*if(countElement.innerHTML < 0){
  $(".over").slideToggle(1000);
}
if(countElement.innerHTML === ''){
  $(".empty").slideDown("fast");
}
if(countElement.innerHTML < 0){
  $("#submitTweet input").prop("disabled", false);
}
}
*/
}
});

