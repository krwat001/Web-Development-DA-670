//This line makes you use the EXPRESS MODULE
var express = require ('express');
//THis creates a new instance of EXPRESS
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//Specifing the route. / equals the home page
app.get("/", function(request, response){

	var myData={
		name: 'Krystle'
		city: 'Winston-Salem'
		state: 'North Carolina'
	}
	
	response.render("home", myData);
});

/*app.get("/menu", function(request, response){
	
	var myData={
		name: 'Krystle'
		city: 'Winston-Salem'
		state: 'North Carolina'
	};
	response.render("menu", myData);

	var text = "<h1>What it means to be VEGAN</h1>";
	text += '<h2><a href="/">HOME</a></h2';
	response.send(text);
}); */


//Now we create the server. Listen for traffic on port 3000. THis is your server
app.listen(3000, function(){
	//Print out a message to the console
	console.log ('Listening on port 3000!');
});