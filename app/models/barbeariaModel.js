function Cliente(connection) {
    this._connection = connection;
}

Cliente.prototype.insereBarbearia = function (dados, callback) {
    this._connection.query(`INSERT INTO barbearia set ?`, [dados], callback);
};

Cliente.prototype.selecionaBarbearia = function (callback) {
    this._connection.query(`SELECT * FROM barbearia`, callback);
};

module.exports = function () {
    return Cliente;
}