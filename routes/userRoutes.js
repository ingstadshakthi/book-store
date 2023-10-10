const express = require('express');
const router = express.Router();
const { register, login, logout, cart } = require('../controllers/userController');
const { auth } = require('./middleware/userAuth');

router
    .post('/register', register)
    .post('/login', login)
    .get('/logout', logout)
    .patch('/cart', auth, cart)

module.exports = router;