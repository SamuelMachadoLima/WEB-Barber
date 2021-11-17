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
        const autenticado = (result[0] != undefined);
        res.render("cliente/MenuCliente", { response: result, autenticado: autenticado });
    });
}

