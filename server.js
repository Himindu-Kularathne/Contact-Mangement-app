const express = require('express');
const dotenv = require('dotenv').config();
const app = express();


const port = process.env.PORT || 5000;

const contactRouter =   require('./routes/contact-routes');
app.use(express.json());
app.use('/api/contacts', contactRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});