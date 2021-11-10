function PaginaInicial(connection) {
    this._connection = connection;
}

PaginaInicial.prototype.CarregarPaginaInicial = function (callback) {
    // this._connection.query(`SELECT * FROM ...`, callback);
    console.log("3")
    return callback;
};

module.exports = function () {
    return PaginaInicial;
}