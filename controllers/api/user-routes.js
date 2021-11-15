const router = require('express').Router();
const { User } = require('../../models');

//get all users
router.get('/', (req,res) => {

});

// get a single user by id
router.get('/:id', (req,res) => {

});

// create a new user
router.post('/', (req,res) => {

});

// create login
router.post('/login', (req,res) => {


});

//create logout
router.post('/logout', (req,res) => {

});

// delete a user
router.delete('/:id', (req,res) => {

});

module.exports = router;