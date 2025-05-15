const femmes = require('../../data/productf.json');

const femmesController = {
    getfemmes : (req , res) =>{
        res.render('femmes.ejs' , {femmes})
    },

    getFemmesDetails : (req ,res) =>{
        //Récuperer l'id de la classe concernée
        const femId = Number(req.params.id);

       const femmSearch = femmes.find( femmSearch => femmSearch.id == femId)

        res.render('fmDetails.ejs' , {femmSearch});
    }
}

module.exports = femmesController;