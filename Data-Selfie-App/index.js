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
// That is the folder with our index.html file
app.use(express.static('public'));

// This allows the server to understand incoming data as JSON
// We can put options within the parenthesis
// Limit allows us to set the maximum size of any body that is coming in
// The 1 megabyte limit protects us from somebody potentially wanting to flood our server 
app.use(express.json({ limit: '1mb' }));

// Using Post()
// Function has two arguments - request & response
// Request variable - holds everything contained within the request
// Response variable - Lets us send things to the client
app.post("/api", (request, response) => {

    console.log("I got a request!");

    // Print out data to the console
    console.log(request.body);

    // Storing the data tha we recieved into an object
    const data = request.body;

    // Send something back as JSON
    response.json({

        status: 'success!',
        // Sending back latitude
        latitude: data.lat,
        // Sending back longitude
        longitude: data.lon,


    });

    // This is required to end the response
    // bare minimum
    // response.end();



});