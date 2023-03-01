const Contact = require('../models/Contact')


// getallcontacts -  Admin
const getallcontacts = async (req, res) => {

    try {
        const contact = await Contact.find({}).sort({createdAt : -1})

        if (contact.length === 0) return res.status(404).json('No contact available')

        res.status(200).json(contact)
    } catch (error) {
        res.status(500).json(error)
    }

}


// addcontact
const addcontact = async (req, res) => {

    try {
        const contact = await Contact.create(req.body)

        if (!contact) return res.status(403).json('Something Wrong')

        res.status(201).json("Message sent successfully")
    } catch (error) {
        res.status(500).json(error)
    }

}


// deletecontact - Admin
const deletecontact = async (req, res) => {

    try {
        const contact = await Contact.findByIdAndDelete(req.params.id)

        if (!contact) return res.status(404).json('contact Not Found')

        res.status(200).json('contact Deleted Successfuly')
    } catch (error) {
        res.status(500).json(error)
    }

}




module.exports = { getallcontacts, addcontact, deletecontact }
