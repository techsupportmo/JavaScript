// ------------------------------------------
// SERVER
// index.js file
// ------------------------------------------

// Essentially stores the express library in variable called 'Express'
const express = require('express');

const app = express();

// Using Port 3000 and prints to the console
app.listen(3000, () => console.log('Listening at 3000'));

// This will allow us to display a static webpage using Express
// Directory name is 'public'
app.use(express.static('public'));

// Using Post()
// Function has two arguments - request & response
// Request variable - holds everything contained within the request
// Response variable - Lets us send things to the client
app.post("/api", (request, response) => {

    console.log(request.body);

});