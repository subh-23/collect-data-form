const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb://localhost:27017/your-database-name';
const PORT = 3000;
const User = require('./model/userSchema');

//database connection
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log("error connecting to MongoDB:", err))
//middleware
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/', require('./routes/index'));

//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});