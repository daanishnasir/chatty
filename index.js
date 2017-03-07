
const express = require('express');
const bodyParser = require ('body-parser');
const port = 3000;

const app = express();



//Application Middleware

app.use(express.static('assets'));
app.use(bodyParser.json());

app.listen(port, function(){
  console.log(`listening on ${port}`);
});

//Step 2: Serving Messages
//
// Create an array for storing your messages temporarily. You could call the variable messages. Think about what scope this variable should be placed in. We need to be sure we keep our messages from previous requests or at least until our server is restarted.
//
// Write a new GET endpoint that returns our array of messages. It will look something like this:

const messages = [
  {id: 1, name:'cheesebuger', rating: 4},
  {id: 1, name:'pizza', rating: 5},

];


//Routes
    //Get
app.get('/messages', function(req,res,next){
  res.status(200).json({messages:messages});                // ? Why is this messages : messages
});

    //Post
app.post('/messages', function(req,res,next){
   messages.push({
     message: req.body.message,
     time: new Date()
   });

   res.status(201).json({messages:messages});
});
