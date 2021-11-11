function Cliente(connection) {
    this._connection = connection;
}

Cliente.prototype.insereCliente = function (dados, callback) {
    console.log(dados);
    this._connection.query(`INSERT INTO cliente set ?`, dados, callback);
};

module.exports = function () {
    return Cliente;
}