module.exports.CarregarPagina = function (application, req, res) {
    res.render("cliente/CadastroUsuario", { erro: 0, field: {} });
}

module.exports.InserirDados = function (application, req, res) {
    var connection = application.config.dbConnection();
    var clienteModel = new application.app.models.clienteModel(connection);
    var params = req.body;

    clienteModel.insereCliente(params, function (err) {
        if (err) {
            if (err.errno == 1062) {
                res.render("cliente/cadastroUsuario", { erro: 1, field: params });
            }
            else console.log(err.errno);
        } else res.redirect("/");
    });
}

module.exports.CarregarMenu = function (application, req, res) {
    res.render("cliente/MenuCliente", { response: {}, autenticado: {} });
}