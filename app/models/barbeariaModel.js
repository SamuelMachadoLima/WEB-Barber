function Cliente(connection) {
    this._connection = connection;
}

Cliente.prototype.insereBarbearia = function (dados, callback) {
    this._connection.query(`INSERT INTO barbearia set ?`, [dados], callback);
};

// Cliente.prototype.selecionaCliente = function (callback) {
//     this._connection.query(`SELECT * FROM cliente`, callback);
// };

module.exports = function () {
    return Cliente;
}