const express = require('express')
const router = express.Router()

const ItemController = require('../controllers/itemsController')

router.get('/GetItems', ItemController.getItems) // works
router.post('/AddItem', ItemController.addItem) // works
router.post('/UpdateItem', ItemController.updateItem) // works
router.get('/DeleteItem', ItemController.deleteItem) // Working partially - need to test
router.get('/SearchItems', ItemController.searchByItem)
router.get('/ShowItem', ItemController.showItem) //works

module.exports = router