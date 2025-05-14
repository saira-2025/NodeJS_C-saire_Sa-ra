const accessoires = require('../../data/products.json')

const accessoiresController = {
    getaccessoiresPage : (req , res) =>{
        res.render('accessoires.ejs' , {accessoires})
    },



getaccessoiresDetails : (req , res) =>{ 
    //recuperer l'ID de la catégorie concernée
    const accessoireID = req.params.id;

    console.log("id de accessoire : " + accessoireID)

//const accessoirSearch = accessoires.find(accessoirSearch => accessoirSearch.id == accessoireID)
        //res.render('accessoiresdetails' , {accessoirSearch});
}




}

module.exports = accessoiresController;