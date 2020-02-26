const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/shop');//injecting code from shop.js
const adminRoute = require('./routes/admin');//injecting code from admin.js
const app = express();
app.use(express.static(path.join(__dirname, 'public')));


app.use(userRoute);
app.use('/admin', adminRoute);


app.use(function(req, res, next){
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    console.log(path.join(__dirname, 'views', '404.html'));
});


app.listen(8000, ()=> {
    console.log("Server is running on Port 3000.");
})