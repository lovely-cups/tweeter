/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
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

$(document).ready(function () {

  console.log("is this working");
  $("#submitTweet").submit(function (event) {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize(),
      success: function () {
        alert("Post Submitted");
        console.log("Did this work?")
      }
    });
    loadTweets();
  });

    const loadTweets = function() {
      $.ajax({
        method: "GET",
        url: "/tweets/",
        success: (responseJSON) => {
          renderTweets(responseJSON);
      }
    });
};

  const renderTweets = function(array) {
    for(let tweet of array) {
      createTweetElement(tweet);
    }
  };
  const createTweetElement = function(tweet) {

    let tweetObj = `<article class ="tweetheader">
      <footer>

      <img class="picture" scr="${tweet.user.avatars}">
      <div>
      ${tweet.user.name}
      </div>
      <div class="user">${tweet.user.handle}</div>

      </footer>  
      <div class="post">${tweet.content.text}</div>
      <div class="days">${tweet.created_at}</div>

      </article>
      `;
      $('#tweets-container').append(tweetObj);
      
  };
      //renderTweets(data);
});
  // Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
// 
//})


//const $tweet = createTweetElement(tweetData);
