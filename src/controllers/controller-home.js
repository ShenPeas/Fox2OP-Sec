module.exports ={
    home(req,res){
        res.render("home",{
            url: 'https://fox2op.gajiin.my.id/',
            userName: req.session.username,
        });
    }
}