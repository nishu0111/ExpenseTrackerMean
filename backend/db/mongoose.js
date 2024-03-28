const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/notes-api").then(() => {
    console.log ('Connected to database');
}).catch(error => {
    console.log('Unable to connect to database ', error);
})