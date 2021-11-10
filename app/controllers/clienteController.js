module.exports.CarregarPagina = function (application, req, res) {
    // var connection = application.config.dbConnection();
    // var indexModel = new application.app.models.indexModel();

    // indexModel.CarregarPaginaInicial(function (err, result) {
    //     res.render("index");
    // });

    res.render("cliente/CadastroUsuario");
}

module.exports.CarregarEtapa2 = function (application, req, res) {
    // var connection = application.config.dbConnection();
    // var indexModel = new application.app.models.indexModel();

    // indexModel.CarregarPaginaInicial(function (err, result) {
    //     res.render("index");
    // });

    res.render("cliente/CadastroUsuario2");
}