const express = require("express");
require('./db/mongoose');

const app = express();

app.listen(3000, () => {
    console.log('app is running on the port 3000');
})