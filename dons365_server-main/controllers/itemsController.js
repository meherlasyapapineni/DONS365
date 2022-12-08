const Item = require('../models/Items')

//Show details of items

const getItems = (req, res, next) => {
    Item.find().then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            
            message: 'An error occured!'
        })
    })
}


//Search items by name

const searchByItem = (req, res, next) => {
    let itemname = req.body.itemname
    Item.find(itemname).then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        console.log(error)
        res.json({
            
            message: 'An error occured!'
        })
    })
}

//Show item details by name
const showItem = (req, res, next) => {
    let itemname = req.body.itemname
    let itemId = req.body.itemId
    console.log("itemId ", itemId, typeof(itemId))
    console.log("itemname ", itemname, typeof(itemname))
    if(itemId != null && itemId != "" && typeof(itemId) != undefined)
    {
        Item.findById(itemId).then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            console.log(error)
            res.json({
                message: 'An error occured!'

            })
         })
    }

    else if(itemname != null && itemname != "" &&  typeof(itemname) != undefined )
    {
        Item.find({"name":itemname}).then(response => {
            res.json({
                response
            })
        })
        .catch(error => {
            console.log(error)
            res.json({
                
                message: 'An error occured!'
            })
        })
    }

    else
    {
        res.json({
                
            message: 'Please provide a valid search filter!'
        })
    }
        
}

//Add new Item

const addItem = (req, res, next) => {
    let item = new Item({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        uploadDate: Date(),
        itemPhoto: req.body.itemPhoto,
        status: "Available",
        userId: req.body.userId,
        phoneNo: req.body.phoneNo,
    })
    item.save()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error =>{
        console.log(error)
        res.json({
            error
        })
    })
}

//Update an Item

const updateItem = (req, res, next) => {
    let itemId = req.body.itemId

    let updatedData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        uploadDate: Date(),
        itemPhoto: req.body.itemPhoto,
        status: req.body.status,
        phoneNo: req.body.phoneNo,
    }
    Item.findByIdAndUpdate(itemId, {$set: updatedData})
    .then(() => {
        res.json({
            message:'Item Updated'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured!'
        })
    })
}

//Delete an Item
const deleteItem = (req, res, next) => {
    let itemId = req.body.itemId
    Item.findOneAndRemove(itemId)
    .then(() =>{
        req.json({
            message: 'Item deleted successfully'
        })        
    })
    .catch(error =>{
        console.log(error)
        req.json({
            message: 'An error occured!'
        })
    })
}

module.exports = {
    getItems, addItem, searchByItem, showItem, updateItem, deleteItem, searchByItem
}