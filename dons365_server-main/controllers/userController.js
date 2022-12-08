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

const userLogin = async(req, res, next) => {
    // let email = req.body.email
    // let password = req.body.password
    // const user = await User.findOne({email : req.body.email});
    // if(email && password)
    // {
    //         User.findOne(req.body).select("-password")
    //         . then(response => {
    //         res.json({
    //             response
    //         })
    //     })
    //     .catch(error => {
    //         res.json({
    //             error
    //         })
    //     })
    // }    
    try {
        // var token = null;
        const user = await User.findOne({email : req.body.email});
        // token = jwt.sign({username : user.username , email : user.email} , process.env.TOKEN_SECRET);
        // res.cookie('token',token);
        if(req.body.password === user.password)
        {
            res.header('Content-Type','application/json');
            var response = new Object();
            response.message = 'Logged In';
            response.code = 0;
            response.username = user.username;
            response.id = user._id;
            response.name = user.name;
            response.email = user.email;
            response.phoneno = user.phoneno;
            res.status(200).send(response);
        }
        else {
            var response = new Object();
            response.error = 'Login failed';
            response.message = "email or password is wrong";
            res.header("Content-Type","application/json");
            res.status(400).send(response);
        }
    }
    catch(err){
        var response = new Object();
        response.error = 'Server error';
        response.message = "Server failed to process user request";
        res.header("Content-Type","application/json");
        res.status(500).send(response);
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
            message: 'Employee deleted successfully'
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