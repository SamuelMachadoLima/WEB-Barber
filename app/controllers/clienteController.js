module.exports.CarregarPagina = function (application, req, res) {
    res.render("cliente/CadastroUsuario");
}

module.exports.InserirDados = function (application, req, res) {
    var connection = application.config.dbConnection();
    var clienteModel = new application.app.models.clienteModel(connection);
    var params = req.body;

    clienteModel.insereCliente(params, function (err) {
        res.redirect("/");
    });
}