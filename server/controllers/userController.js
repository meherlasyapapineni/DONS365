const User = require('../models/Users')

//Show details of users

const getUsers = (req, res, next) => {
    User.find().then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//User login

const userLogin = (req, res, next) => {
    let email = req.body.email
    let password = req.body.password
    if(email && password)
    {
            User.findOne(req.body).select("-password")
            . then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            res.json({
                error
            })
        })
    }    
}

//Search users by name

const searchByName = (req, res, next) => {
    let name = req.body.name
    User.find(name).then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            
            message: 'An error occured!'
        })
    })
}

//Show user details by Id
const showUser = (req, res, next) => {
    let userId = req.body.userId
    User.findById(userId).then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Add/Register new User

const addUser = (req, res, next) => {
    let user = new User({
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        phoneno: req.body.phoneno 
    })
    user.save()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            error
        })
    })
}

//Update a User

const updateUser = (req, res, next) => {
    let userId = req.body.userId

    let updatedData = {
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        phoneno: req.body.phoneno
    }
    User.findByIdAndUpdate(userId, {$set: updatedData})
    .then(() => {
        res.json({
            message:'User Updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete a User
const deleteUser = (req, res, next) => {
    let userId = req.body.userId
    User.findOneAndRemove(userId)
    .then(() =>{
        req.json({
            message: 'User deleted successfully'
        })        
    })
    .catch(error =>{
        req.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    getUsers, showUser, addUser, updateUser, deleteUser, searchByName, userLogin
}
