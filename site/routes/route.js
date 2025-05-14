const express = require('express');
const paController = require('../controllers/paController');
const accessoiresController = require('../controllers/accessoiresController');
const femmesController = require('../controllers/femmesController');
const hommesController = require('../controllers/hommesController');

//Les routes à emprunter
const router = express.Router();

//mise en place d'une route
router.get('/' , paController.getPaPage);

//Mise en place de la route qui mène à 
router.get('/femmes', femmesController.getfemmes);

//Mise en place de la route qui mène à la liste des classes
router.get('/hommes', hommesController.gethommes);

//Mise en place de la route qui mène à la liste des classes
router.get('/accessoires', accessoiresController.getaccessoiresPage);


//détails d'une catégorie
router.get('/accessoiresdetails/:id', accessoiresController.getaccessoiresDetails);







module.exports = router;