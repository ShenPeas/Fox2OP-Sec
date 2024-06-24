module.exports ={
    home(req,res){
        res.render("home",{
            url: 'http://fox2op.gajiin.my.id/',
            userName: req.session.username,
        });
    }
}