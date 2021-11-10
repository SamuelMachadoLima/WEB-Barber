module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.indexController.CarregarPagina(application, req, res);
    });
};