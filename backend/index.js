
const express = require('express');
const app = new express();
const path = require('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.listen(4000, () => {
	console.log("Server is running");
});

app.get('/', (req, res) => {
	var jsondata = {sample: "It works"};
	res.json(jsondata);
});


app.get('/newEndpoint', (req, res) => {
	var jsondata = {sample: "It still works"};
	res.json(jsondata);
});
