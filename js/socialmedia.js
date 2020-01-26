'use strict';
var documents = {
    'documents': []
};
var https = require('https');
var URL = require('url').URL;
var subscription_key = "4810c1da73d649789ab462fc1ddc54af";
var endpoint = "https://eastus.api.cognitive.microsoft.com/";

var path = '/text/analytics/v2.1/sentiment';

var response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
        body += d;
        score_num = parseFloat('0.' + body.match(/\d+/g)[2]);
        // console.log(score_num);
    });
    response.on('end', function () {
        let body_ = JSON.parse(body);
        let body__ = JSON.stringify(body_, null, '  ');
    });
    response.on('error', function (e) {
        console.log('Error: ' + e.message);
    });
};

var get_sentiments = function (documents) {
    var body = JSON.stringify(documents);

    var request_params = {
        method: 'POST',
        hostname: (new URL(endpoint)).hostname,
        path: path,
        headers: {
            'Ocp-Apim-Subscription-Key': subscription_key,
        }
    };

    var req = https.request(request_params, response_handler);
    req.write(body);
    req.end();
}


function FacebookClick()
{
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
          document.querySelector('#FacebookButton').disabled = true;
          /* make the API call */
          let idNum = 1;
          FB.api(
              "/" + response.authResponse.userID + "/posts",
              function (responsePost) {
                if (responsePost && !responsePost.error) {
                  /* handle the result */
                  //console.log(responsePost)
                  responsePost.data.forEach(postMessage => {
                      if(postMessage.hasOwnProperty('message'))
                      {
                          console.log(documents)
                          documents.documents.push({'id': idNum, 'language': 'en', 'text': postMessage.message});
                      }
                          
                  });
              }
              }
          );
              } else {
              //console.log('User cancelled login or did not fully authorize.');
              }
              
              console.log(response)
          }, {scope: 'user_posts'});
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));}

function TwitterClick(){

}

function SpotifyClick()
{
    
}

function InstagramClick()
{
    
}
function GetResults()
{
    window.location.href = "results.html";
    // get_sentiments(documents);
}