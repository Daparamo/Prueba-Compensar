const express = require('express');
var path = require('path');

//Starting Express app
const app = express();

var port = process.env.PORT || 3000
    //Set the base path to the angular-test dist folder
app.use(express.static(path.join(__dirname, 'dist/angular-aws-cognito-auth-demo')));

//Any routes will be redirected to the angular app
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist/angular-aws-cognito-auth-demo/index.html'));
});

//Starting server on port 8081
app.listen(port, () => {
    console.log('Server started!');
    console.log('on port ' + port);
});