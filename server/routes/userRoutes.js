const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express()

app.use(cors());

const UserController = require('../controllers/userController')

router.get('/GetUsers', UserController.getUsers) // works
router.post('/Login', UserController.userLogin) // works
router.post('/RegisterUser', UserController.addUser) // works
router.post('/UpdateUser', UserController.updateUser) // works
router.get('/DeleteUser', UserController.deleteUser) // Working partially - need to test
router.get('/SearchUsers', UserController.searchByName)
router.get('/GetUser', UserController.showUser) //works

module.exports = router