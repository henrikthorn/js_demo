
// Get the class Person
const Person = require('./model/Person.js');

// Standard paths and express includes
const express = require('express');
const app = new express();
const path = require('path');

app.use(function(req, res, next) {
  // We need to allow CORS to ignore different domains. 
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Start the server and tell us things work
app.listen(4000, () => {
	console.log("Server is running");
});

app.get('/', (req, res) => {
	// Very simple endpoint
	var jsondata = {sample: "It works"};

	// Return Json
	res.json(jsondata);
});


app.get('/newEndpoint', (req, res) => {
	// We create a new object of Person
	let person = new Person();

	// Set the name
	person.setName('Henrik Thorn');

	// Prepare the data.. We could also just send user
	var jsondata = {sample: person};

	// Return json for the frontend
	res.json(jsondata);
});
