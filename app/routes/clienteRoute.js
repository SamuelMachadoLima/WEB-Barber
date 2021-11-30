module.exports = function (application) {
    application.get('/cadastrarCliente', function (req, res) {
        application.app.controllers.clienteController.CarregarPagina(application, req, res);
    });
    application.post('/cadastrarCliente', function (req, res) {
        application.app.controllers.clienteController.InserirDados(application, req, res);
    });

    application.get('/menuCliente', function (req, res) {
        application.app.controllers.indexController.Autenticar(application, req, res);
    });
};