module.exports = function (application) {
    application.get('/cadastrarCliente', function (req, res) {
        application.app.controllers.clienteController.CarregarPagina(application, req, res);
    });
    application.get('/etapa2CadastroCliente', function (req, res) {
        application.app.controllers.clienteController.CarregarEtapa2(application, req, res);
    });
};