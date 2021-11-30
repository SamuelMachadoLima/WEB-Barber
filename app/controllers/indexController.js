module.exports.CarregarPagina = function (application, req, res) {
    // var connection = application.config.dbConnection();
    // var indexModel = new application.app.models.indexModel(connection);

    // indexModel.CarregarPaginaInicial(function (err, result) {
    //     res.render("home/index", { response: result });
    // });

    res.render("home/index");
}

module.exports.Autenticar = function (application, req, res) {
    var connection = application.config.dbConnection();
    var indexModel = new application.app.models.indexModel(connection);
    var params = req.body;

    indexModel.Autenticar(params, function (err, result) {
        if(err){
            res.send(err);
        }

        if(result.length > 0){
            req.session.user = result;
            if (params.tipoUser == 1)
                res.render("cliente/MenuCliente", { response: result, autenticado: true });
            else{
                res.redirect("/menuBarbearia");
                // res.render("barbearia/MenuBarbearia", { response: result, autenticado: true });
            }

        } else{
            res.redirect("/");
        }
    });
}