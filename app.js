//This line makes you use the EXPRESS MODULE
var express = require ('express');
//THis creates a new instance of EXPRESS
var app = express();

//Specifing the route. / equals the home page
app.get('/', function(request, response){
	var text = "<h1>Welcome To Jamii, Your Community Kitchen</h1>";
	text += '<h2><a href="/about">VEGAN</a></h3>';
	text += '<h2><a href="/about2">VEGETARIAN</a></h3>';
	text += '<h2><a href="/menu">MENU</a></h3>';
	response.send(text);
});

app.get('/about', function(request, response){
	var text = "<h1>What it means to be VEGAN</h1>";
	text += '<h2><a href="/">HOME</a></h2';
	response.send(text);
});

app.get('/about2', function(request, response){
	var text = "<h1>What it means to be VEGETARIAN</h1>";
	text += '<h2><a href="/">HOME</a></h2';
	response.send(text);
});

app.get('/menu', function(request, response){
	var text ="<h1>See What's Cooking!";
	text += '<h2><a href="/">HOME</a></h2';
	response.send(text);
});



//Now we create the server. Listen for traffic on port 3000. THis is your server
app.listen(3000, function(){
	//Print out a message to the console
	console.log ('Listening on port 3000!');
});