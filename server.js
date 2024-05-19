const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require("./config/dbconnection");
const errorHandler = require("./middleware/errorhandler");
const contactRouter =   require('./routes/contact-routes');

const app = express();


connectDB();

const port = process.env.PORT || 5000;


app.use(express.json());
app.use('/api/contacts', contactRouter);
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});