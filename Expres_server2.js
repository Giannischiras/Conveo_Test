const express = require('express');
const app = express();//we do that because because express returns a function
const Users = require('../models/Users');//is the ../model correct ?

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user1:conveotest@cluster0.zu4llqn.mongodb.net/users?retryWrites=true&w=majority";//Conveo_Data_Base URl??
const mongoose=require('mongoose');


function middleware(req,res,next)
{
    //middle-stop->gets called every time a request is made
    next(); 
}

app.use(middleware);
app.use(express.json());//Body-Parser

const client = new MongoClient(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true    
});//???
async function connectToMongoDB() {
    try {
      await client.connect();
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB', error);
    }
  }
  
connectToMongoDB();
//Connects to the DataBase,But it dosnt create users ?


app.post('/users',(req,res) => {
  try {
    const userData = req.body; // request body contains the user data
    const user = new Users(userData); // Creating a new instance of the Users model

    user.save(); // Saving the user document to the database?

    res.send(savedUser); // Testing if it works(Sending Back the Data to check them)
  } catch (error) {
    console.error('Error saving user', error);
    res.status(500).send('Error saving user');
  }
  
})


app.get('/users/:id',(req,res) =>{
  //we search the MongoDatabase with the id,to find if the users exist
  //the id will be in request parameters
  //if it does we retrieve if it doesnt res.send('NO USER FOUND')..ktlp
  res.send({message: "RETRIEVE TEST"});
})

app.put('/users/:id',(req,res) =>{
  //search for the user,if we find him
  //we update the object(the updated body) i dont get how to do that
  //if we update it successfully,res.send('USERS UPDATED SUCCESSFULLY')
  res.send({message: "UPDATE TEST"});
})

app.delete('/users/:id',(req,res) =>{
 //finds the user with the id,and deletes it from the Database
 res.send({message: "DELETE TEST"});
  
})

app.listen(3000);//server's port 3000
console.log('geia');
// :id?
//->