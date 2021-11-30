module.exports = function (application) {
    application.get('/cadastrarBarbearia', function (req, res) {
        application.app.controllers.barbeariaController.CarregarPagina(application, req, res);
    });
    application.post('/cadastrarBarbearia', function (req, res) {
        application.app.controllers.barbeariaController.InsereBarbearia(application, req, res);
    });

    application.get('/menuBarbearia', function (req, res) {
        application.app.controllers.barbeariaController.CarregarMenu(application, req, res);
    });
};