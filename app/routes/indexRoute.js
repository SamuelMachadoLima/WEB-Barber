module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.indexController.CarregarPagina(application, req, res);
    });

    application.post('/menuCliente', function (req, res) {
        application.app.controllers.indexController.Autenticar(application, req, res);
    });
};