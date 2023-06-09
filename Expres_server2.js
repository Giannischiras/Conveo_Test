const express = require('express');
const app = express();//we do that because because express returns a function

function middleware(req,res,next)
{
    //middle-stop->gets called every time a request is made
    next(); 
}

app.use(middleware);
app.use(express.json());
app.post('/users',(req,res) => {
    //the data of the user will be inside the request body
    //put the user's-data in a data stuct (array px)
    res.send({message: "CREATE TEST"});
    
})

app.get('/users/:id',(req,res) =>{
    //we search the data-struct with the id,to find if the users exist
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
   //finds the user with the id,and deletes it...
   res.send({message: "DELETE TEST"});
    
})

app.listen(3000);//server's port 3000
console.log('geia');
// :id?
//->