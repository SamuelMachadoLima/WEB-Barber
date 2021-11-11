function PaginaInicial(connection) {
    this._connection = connection;
}

PaginaInicial.prototype.CarregarPaginaInicial = function (callback) {
    this._connection.query(`SELECT * FROM cliente`, callback);
};

module.exports = function () {
    return PaginaInicial;
}