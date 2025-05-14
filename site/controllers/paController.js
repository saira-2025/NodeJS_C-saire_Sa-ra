const paController = {
    getPaPage : (req , res) =>{
        res.render('accueil.ejs')
    },

    getFemmeProd : (req , res) =>{
        res.render('hommes.ejs')
    }
}


module.exports = paController