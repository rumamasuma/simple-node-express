const express = require('express');
const cors = require('cors');
const app = express();
// middleware
app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/' , (req, res) =>{
    res.send('Hello from my second node server and im practicing  and  i m excited & i m trying to automatic start');

});
const users =[
    {
        id : 0, name :'rumana' , email :'rumana@gmail.com' , contact :' 0173'
    },
    {
        id : 1, name :'asha' , email :'asha@gmail.com' , contact : '0193'
    },
    {
        id : 2, name :'nishi' , email :'nishi@gmail.com' , contact : '0163'
    },
    {
        id : 3, name :'sultana' , email :'sultanaa@gmail.com' , contact : '0153'
    },
    {
        id : 4, name :'ruma' , email :'ruma@gmail.com' , contact : '0170'
    }
]


app.get('/users' , (req , res) =>{
    // console.log(req.query);
    const search = req.query.search;
    // search query parameter
    if(search){
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
    }
    else{
        res.send(users);
    }
   
});

// app.METHOD
app.post('/users' , (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hiting the post' , req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser)
})


// for single user (dynamic api)
app.get('/users/:id' , (req , res) =>{
  
    // console.log(req.params.id);
    const id = req.params.id;
    const user = users[id];
    res.send(user); 
});
// different route show
app.get('/fruits' , (req , res) =>{
    res.send(['mango','apple', 'banana']);
});


app.get('/fruits/mangoes/fazli' , (req , res) =>{
    res.send('I love mango');
});

 app.listen(port , () =>{
     console.log('listening to port ', port)
 })