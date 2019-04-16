const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const items = require('./routes/api/items');

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to DB
// mongoose.connect(db)
//         .then(() => console.log('MongoDB Connected...'))
//         .catch(err => console.log(err));

mongoose.connect(db,{useNewUrlParser: true}, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Mongo Connected...');
    }
});


//Use Routes

app.use('/api/items', items);

app.get('/', function(req, res){
    res.send("Sever is running");
});

const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Server up and running on port ${port} !`)); 

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Server has started on ' + port);
    }
})