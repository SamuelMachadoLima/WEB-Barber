module.exports.CarregarPagina = function (application, req, res) {
    res.render("barbearia/cadastroUsuario", {response: {} });
}

module.exports.InsereBarbearia = function (application, req, res) {
    var connection = application.config.dbConnection();
    var barbeariaModel = new application.app.models.barbeariaModel(connection);
    var params = req.body;

    barbeariaModel.insereBarbearia(params, function (err, result) {
        res.render("barbearia/MenuBarbearia", {response: result});
    });
}

module.exports.CarregarMenu = function (application, req, res) {
    console.log(req.cookies)
    res.render("barbearia/MenuBarbearia", {response: {} });
}