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
          document.querySelector('#FBButton').disabled = true;
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