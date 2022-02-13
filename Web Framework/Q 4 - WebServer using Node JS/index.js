
// Importing the http module
const http = require("http")
  
// Creating server 
const server = http.createServer((req, res) => {
    // Sending the response
    res.write("THIS THE RESPONCE PAGE FROM THE SERVER")
    res.end();
})
  
// Server listening to port 3000
server.listen((3000), () => {
    console.log("Server is Running");
})

// pre-requisite installed node js on pc
// command to run on terminal of this file is -->> node index.js (File name) 
// after getting Server is Running msg on terminal go to browser and hit http://localhost:3000/ for getting output
