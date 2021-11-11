module.exports.CarregarPagina = function (application, req, res) {
    var connection = application.config.dbConnection();
    var indexModel = new application.app.models.indexModel(connection);

    indexModel.CarregarPaginaInicial(function (err, result) {
        res.render("home/index", { response: result });
    });
}