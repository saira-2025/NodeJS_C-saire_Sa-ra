const express = require('express');
const paController = require('../controllers/paController');


//Les routes à emprunter
const router = express.Router();

//mise en place d'une route
router.get('/' , paController.getPaPage);


module.exports = router;