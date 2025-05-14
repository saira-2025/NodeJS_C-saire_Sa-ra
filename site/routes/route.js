const express = require('express');
const paController = require('../controllers/paController');


//Les routes à emprunter
const router = express.Router();

//mise en place d'une route
router.get('/' , Controller.getPaPage);

//Mise en place de la route qui mène à la liste des classes
router.get('/classesList', classesController.getClasseslistPage );

//Mise en place de la route qui mène à la liste des classes
router.get('/classesList', classesController.getClasseslistPage );

//Mise en place de la route qui mène à la liste des classes
router.get('/classesList', classesController.getClasseslistPage );









module.exports = router;