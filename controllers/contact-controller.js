//asyncHandler automatically catches the errors thrown by asynchronous route and passes to the express-async-handler 
//this is a middleware layer , this ensures that errors are properly handled and dont crash the application


const asyncHandler = require("express-async-handler");



//get all contacts controller
// api/contacts     , get
const getContacts = asyncHandler(async (req , res ) => {
    res.status(200).json(
        {
            message: "these are all contacts"
        }
    )
});


//get specific contact
//api/contacts/id:1  , get 
const getContact = asyncHandler(async (req,res) => {
    const id = req.params.id;
    res.status(201).json(
        {
            message: "this is a specific contact with id: " + id  
        }
    )
});


//create new contact
//api/contact   , post
const createContact = asyncHandler(async (req, res) => {

    

    //destructuring the body
    const {name, email, phone} = req.body;
    console.log(req.body);
    if(!name || !email || !phone ) {
        res.status(400).json(
            {
                message : "new contact is not added"
            }
        );
        throw new Error("All fields are mandetory")

    }
    else {
        res.status(200).json(
            {
                message : "new contact is added"
            }
        )
    }

  
});


//update contact
//api/contact/id:1  , put
const updateContact =  asyncHandler(async (req, res) => {
    const id  = req.params.id;
    res.status(201).json(
        {
            message: id + "is updated"
        }
    )
});


//delete contact
//api/contact/id:1  , delete
const deleteContact = asyncHandler( async (req, res) => {
    const id  = req.params.id ;
    res.status(200).json(
        {
            message : "contact is deleted" + id
        }
    )
});


module.exports = {getContacts , getContact, createContact, updateContact , deleteContact} ;

