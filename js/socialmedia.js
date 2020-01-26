'use strict';
var documents = {
    'documents': []
};
var facebook_res = 0;

document.onload = function(){
    var https = require('https');
    var URL = require('url').URL;
    var subscription_key = "4810c1da73d649789ab462fc1ddc54af";
    var endpoint = "https://eastus.api.cognitive.microsoft.com/";

    var path = '/text/analytics/v2.1/sentiment';
}

async function get_sentiments(documents) {
    const endpoint = "https://eastus.api.cognitive.microsoft.com/";
    const subscription_key = "4810c1da73d649789ab462fc1ddc54af";
    const path = '/text/analytics/v2.1/sentiment';
    
    let body = JSON.stringify(documents);

    console.log(body);

    let request_params = {
        method: 'POST',
        headers: {
            'Ocp-Apim-Subscription-Key': subscription_key,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: body
    };

    const response = await fetch(endpoint + path, request_params);
    return await response.json();
};

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
                          idNum = idNum + 1
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
    get_sentiments(documents).then((json) => {
        facebook_res = (json.documents[0].score);
        document.cookie = "A|A" + facebook_res;
        console.log(document.cookie)
        window.location.href = "results.html";
    });
     // "FUCKYOMAMA<div class=\"c100 p"
        //  + facebook_res
        //  + ""
}