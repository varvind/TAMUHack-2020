const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})


app.use(express.static('views'))
app.use(express.static(__dirname))

app.listen(process.env.PORT || 3000)



'use strict';

let https = require('https');
var URL = require('url').URL;
subscription_key = "4810c1da73d649789ab462fc1ddc54af";
endpoint = "https://eastus.api.cognitive.microsoft.com/";

let path = '/text/analytics/v2.1/sentiment';

let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
        score_num = parseFloat('0.' + body.match(/\d+/g)[2]);
        console.log(score_num);
    });
    response.on('end', function () {
        let body_ = JSON.parse(body);
        let body__ = JSON.stringify(body_, null, '  ');
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};


function FacebookClick() {
    window.fbAsyncInit = function() {
        FB.init({
          appId      : 2665634096887061,
          cookie     : true,
          xfbml      : true,
          version    : 'v5.0'
        });
          
        FB.AppEvents.logPageView();   
    
        FB.login(function(response) {
              if (response.authResponse) {
          document.querySelTSector('#FacebookButton').disabled = true;
          /* make the API call */
          FB.api(
              "/" + response.authResponse.userID + "/posts",
              {'since':'last year'},
              function (responsePost) {
                if (responsePost && !responsePost.error) {
                  /* handle the result */
                  //console.log(responsePost)
                  responsePost.data.forEach(postMessage => {
                      if(postMessage.hasOwnProperty('message'))
                      {
                          console.log(postMessage.message)
                      }
                          
                  });
              }
              }
          );
              } else {
              //console.log('User cancelled login or did not fully authorize.');
              }
              
              //console.log(response)
          }, {scope: 'user_posts'});
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
}


function TwitterClick(){

}

function SpotifyClick()
{
    
}

function InstagramClick()
{
    
}