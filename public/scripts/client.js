/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const renderTweets = function(array) {
    for(let tweet of array) {
      createTweetElement(tweet);
    }
  }
  const createTweetElement = function(tweet) {

    let tweetObj = `<article class ="tweetheader">
      <footer>

      <img class="picture" scr="${tweetData.user.avatars}">
      <div>
      ${tweetData.content.user.name}
      </div>
      <div class="user">${tweetData.user.handle}</div>

      </footer>  
      <div class="post">${tweetData.content.text}</div>
      <div class="days">${tweetData.created_at}</div>

      </article>
      `;
      $('#tweets-container').append($tweet);
      
  };
      renderTweets(data);
});
  // Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
// 
//})


//const $tweet = createTweetElement(tweetData);
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

