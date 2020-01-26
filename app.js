const express = require('express')
const app = express()

var score_num = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/views/index.html')
})

app.use(express.static('./static/views'))

app.listen(3000, 
    console.log('listening on port 3000')
)

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

let get_sentiments = function (documents) {
    let body = JSON.stringify(documents);

    let request_params = {
        method: 'POST',
        hostname: (new URL(endpoint)).hostname,
        path: path,
        headers: {
            'Ocp-Apim-Subscription-Key': subscription_key,
        }
    };

    let req = https.request(request_params, response_handler);
    req.write(body);
    req.end();
}

let documents = {
    'documents': [
        { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' }
    ]
};
var social_media_type = 'social';
get_sentiments(documents);


function TwitterClick()
{
    
}

function SpotifyClick()
{
    
}

function InstagramClick()
{
    
}