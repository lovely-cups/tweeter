/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/*const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]
*/
//toggle for new tweet button on nav
$(document).ready(function () {
  $('.button').click(function () {
    $('.new-tweet').toggle(400);
  });
}); 



$(document).ready(function () {
  //console.log("is this working");
  $("#submitTweet").submit(function (event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: function () {
        loadTweets();
        //post request for new tweet on event page
      }
    });
    
  });
//load tweets while not refrteshing page get request
    const loadTweets = function() {
      $('#tweets-container').empty();
      $.ajax({
        method: "GET",
        url: "/tweets/",
        success: (responseJSON) => {
          renderTweets(responseJSON);
      }
    });
};
//function to loop through tweets
  const renderTweets = function(array) {
    for(let tweet of array) {
      createTweetElement(tweet);
    }
  };
  const createTweetElement = function(tweet) {
    const escape =  function(str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    } 
    //create new tweet body for post
    const safeHTML = `<p>${escape(tweet.content.text)}</p>`
    let tweetObj = `<article class ="tweetheader">
      <footer>

      <img class="picture" src="${tweet.user.avatars}">
      <div>
      ${tweet.user.name}
      </div>
      <div class="user">${tweet.user.handle}</div>

      </footer>  
      <div class="post">${safeHTML}</div>
      <div class="days">${tweet.created_at}</div>

      </article>
      `;
      $('#tweets-container').append(tweetObj);
      
  };
  loadTweets();
      //renderTweets(data);
});
  // Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
// 
//})


//const $tweet = createTweetElement(tweetData);
