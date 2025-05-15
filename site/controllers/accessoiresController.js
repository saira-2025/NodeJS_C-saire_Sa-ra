const accessoires = require('../../data/product.json');


const accessoiresController = {
    getaccessoiresPage : (req , res) =>{
        res.render('accessoires.ejs' , {accessoires})
    },

    getAccessoireDetails : (req ,res) =>{
        //Récuperer l'id de la classe concernée
        const accesId = Number(req.params.id);

       const accessSearch = accessoires.find( accessSearch => accessSearch.id == accesId)

        res.render('accessDetails.ejs' , {accessSearch});
    }


}


module.exports = accessoiresController