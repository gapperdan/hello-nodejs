//Load the request module
var request = require('request');

//sample REST GET (JSON response)
request.get('http://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Show the response

        var obj = JSON.parse(body);
        console.log('userId='+obj.userId);
        console.log('id='+obj.id);
        console.log('title='+obj.title);
        console.log('body='+obj.body);
    }
});
