module.exports = function (application) {
    application.get('/cadastrarBarbeiro', function (req, res) {
        application.app.controllers.barbeariaController.CarregarPagina(application, req, res);
    });
};