// server/index.js

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); //enable CORS  

//Set the port that you want the server to run on
const PORT = process.env.PORT || 8080;

//creates an endpoint for the route /api
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from my ExpressJS' });
});

//create an endpoint for the route /myname
app.get('/api/myname', (req, res) => {
   const name ={name:"Yadira Morales"};
    res.json(name);
});

// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});