

//get all contacts controller
// api/contacts     , get
const getContacts = (req , res ) => {
    res.status(200).json(
        {
            message: "these are all contacts"
        }
    )
}


//get specific contact
//api/contacts/id:1  , get 
const getContact = (req,res) => {
    const id = req.params.id;
    res.status(201).json(
        {
            message: "this is a specific contact with id: " + id  
        }
    )
}


//create new contact
//api/contact   , post
const createContact = (req, res) => {

    

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

  
}


//update contact
//api/contact/id:1  , put
const updateContact =  (req, res) => {
    const id  = req.params.id;
    res.status(201).json(
        {
            message: id + "is updated"
        }
    )
}


//delete contact
//api/contact/id:1  , delete
const deleteContact = (req, res) => {
    const id  = req.params.id ;
    res.status(200).json(
        {
            message : "contact is deleted" + id
        }
    )
}


module.exports = {getContacts , getContact, createContact, updateContact , deleteContact} ;