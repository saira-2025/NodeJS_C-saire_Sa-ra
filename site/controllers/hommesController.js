const hommes = require('../../data/producth.json');

const hommesController = {
    gethommes : (req , res) =>{
        res.render('hommes.ejs' , {hommes})
    },


    getHommesDetails : (req ,res) =>{
        //Récuperer l'id de la classe concernée
        const homId = Number(req.params.id);

       const hommSearch = hommes.find( hommSearch => hommSearch.id == homId)

        res.render('hmDetails.ejs' , {hommSearch});
    }
}





module.exports = hommesController;