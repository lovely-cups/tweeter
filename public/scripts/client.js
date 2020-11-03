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

const howManyDays = (createdDate) => {
  const dateNow = Date.now();
  let hoursAgo = (dateNow - createdDate) / 1000 / 60 / 60;
  if (hoursAgo < 24) {
    return `tweeted ${Math.floor(hoursAgo)} hours ago`;
  } else {
    return `tweeted ${Math.floor(hoursAgo / 24)} days ago`;
  }
};

$(document).ready(function () {
  $('.button').click(function () {
    $('.new-tweet').toggle(400);
  });
}); 





$(document).ready(function () {
  //console.log("is this working");
  $("#submitTweet").submit(function (event) {
    event.preventDefault();
    let text = document.getElementById("test")
    let count = $(text).val().length;
    if(count > 140) {
      $("#over").slideToggle(1000);
    } else if (count <= 0) {
      $("#empty").slideDown("fast");
    } else {
      $.post('/tweets', $(this).serialize()).then(
        function() {
          $.ajax('/tweets', { method: 'GET' })
            .then(function() {
              $('#test').val('');
              $('.counter').html(140);
              $('.tweet-container').empty();
              loadTweets();
            });
        });
    
  }
    
    
        //post request for new tweet on event page
    });
//load tweets while not refrteshing page get request
    const loadTweets = function() {
      $('#tweets-container').empty();
      $.ajax({
        method: "GET",
        url: "/tweets/",
        success: (responseJSON) => {
          renderTweets(responseJSON.reverse());
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
      <div class="days">${howManyDays(tweet.created_at)}</div>
      <div class="symbols">&#9873 &#10227; &#10084;</div>

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
